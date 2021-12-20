import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

// Services
import { getAllPosts } from '../../services/postService'
import { getProfileById } from '../../services/profileService'

// Components 
import Header from '../Header/Header'

const Main = (props) => {
  const { id } = useParams()

  const [posts, setPosts] = useState([])
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfileById(id)
        console.log(profileData)
        setProfile(profileData)
      } catch (error) {
        throw error
      }
    }
    fetchProfile()
  }, [id])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) }
  }, [])

  // console.log(posts)
  const sortedPosts = posts.filter(post => 
    post.added_by._id === id
  )

  
    // console.log(profileName[0].name)
  // const name = profileName[0].name

  return (
    <div className="all-posts">
      <Header title={profile?.name} />
      {sortedPosts.map((post, index) => (

        <Link to={`/posts/${post._id}`}><div className="post" key={index}>
          <img src={post.image} alt="img" />
          <h3>{post.title}</h3>
        </div></Link>
      ))}
    </div>
  )
}


export default Main