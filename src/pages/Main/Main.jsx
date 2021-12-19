import React, { useState, useEffect } from 'react'

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

        <div className="post" key={index}>
          <img src={post.image} alt="img" />
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  )
}


export default Main