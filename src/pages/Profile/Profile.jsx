import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

// Services
import { getAllPosts } from '../../services/postService'
import { getAllProfiles } from '../../services/profileService'

// Components 
import Header from '../Header/Header'

const Main = (props) => {
  const { id } = useParams()

  const [posts, setPosts] = useState([])
  const [profiles, setProfile] = useState([])

  

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) }
  }, [])

  useEffect(() => {
    const fetchAllProfiles = async () => {
      const profileData = await getAllProfiles()
      setProfile(profileData)
    }
    fetchAllProfiles()
    return () => { setPosts([]) }
  }, [])

  // console.log(posts)
  const sortedPosts = posts.filter(post => 
    post.added_by._id === id
  )

  const profileName = profiles.filter(profile =>
      profile._id === id
    )
    // console.log(profileName[0].name)
  // const name = profileName[0].name

  return (
    <div className="all-posts">
      <Header title="p" />
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