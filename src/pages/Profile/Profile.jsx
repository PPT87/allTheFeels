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
  props.setTitle(`${profile?.name}'s Profile`)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfileById(id)
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

  const sortedPosts = posts.filter(post => 
    post.added_by._id === id
  )

  return (
    <div className="all-posts">
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