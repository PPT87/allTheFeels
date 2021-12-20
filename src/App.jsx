import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profile from './pages/Profile/Profile'
import CreatePost from './components/PostForm/CreatePost'
import EditPost from './pages/Posts/EditPost'
import PostDetails from './pages/Posts/PostDetails'
import Main from './pages/Main/Main'
import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [image, setImage ] = useState("")
  const [ url, setUrl ] = useState("")

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const uploadImage = () =>  {
    const data  = new FormData()
    data.append("file", image)
    data.append("upload_preset", "rkjmljnm")
    data.append("cloud_name","allthefeels")
    fetch("https://api.cloudinary.com/v1_1/allthefeels/image/upload",{
      method:"post",
      body: data 
    })

    .then(resp => resp.json())
    .then(data => {
      setUrl(data.url)
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile user={user}/> : <Navigate to="/login" />}
        />
        <Route path='/posts'
          element={<Main user={user} />}
        />
        <Route path='/posts/:id'
          element={<PostDetails user={user} />}
        />
        <Route
          path="/posts/:id/edit"
          element={user ? <EditPost user={user}/> : <Navigate to="/login" />}
        />
        <Route path="/new"
          element={user ? <CreatePost user={user}/> : <Navigate to="/signin"/>}
        />
      </Routes>
      <div>
      <div>
        <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
      <h1>Uploaded image will be displayed here</h1>
      <img src={url} alt='uploadimage'/>
      </div>
      </div>
    </>
    
  )
}

export default App
