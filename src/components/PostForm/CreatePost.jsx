import React, { useState } from 'react'
import { useNavigate } from 'react-router'

// Components
import PostForm from './PostForm'
import Header from '../../pages/Header/Header'

//Services
import { createPost } from '../../services/postService'

const CreatePost = (props) => {

  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')

  const formData = {
    title: title, 
    body: body, 
    tags: tags,
    added_by: props.user.profile, 
  }

  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const newPost = await createPost(formData)
      console.log(newPost) //<= verify new post data
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
    <Header title='Create Post' />
    <PostForm
      title={title}
      setTitle={setTitle}

      body={body}
      setBody={setBody}

      tags={tags}
      setTags={setTags}

      handleCreatePost={handleCreatePost}
    />
  </div>
  )
}

export default CreatePost