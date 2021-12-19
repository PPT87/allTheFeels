import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Services
import { getAllPosts } from '../../services/postService'


// Components 


const Main = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) }
  }, [])

  return (
    <div className="all-posts">
      {posts.map((post, index) => (

        <Link to={`/posts/${post._id}`}><div className="post" key={index}>
          <img src={post.image} alt="img" />
          <h3>{post.title}</h3>
        </div></Link>
      ))}
    </div>
  )
}


export default Main