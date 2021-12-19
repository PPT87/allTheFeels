import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

// Components
import Header from '../../pages/Header/Header'

//Services
import * as postService from '../../services/postService'

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])

  // const formData = {
  //   title: title, 
  //   body: body, 
  //   tags: tags,
  //   added_by: props.user.profile, 
  // }

  const handleEditPost = async (e) => {
    e.preventDefault()
    try {
      const updatedPost = await postService.updatePost(e)
      setPost(updatedPost)
      console.log(updatedPost)
      console.log("THIS IS NAVIGATING TO POST/ID")
      navigate(`/posts/${id}`)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await postService.getPostById(id)
        setTitle(postData.title)
        setBody(postData.body)
        const mappedTags = postData.tags.map((tag) => (
          tag.tagName
        )).join(', ')
        setTags(mappedTags)
      } catch (error) {
        throw error
      }
    }
    fetchPost()
  }, [id])
  console.log(body, title, tags)
  
  return (
    <div className="layout">
      <Header title="Edit Post"/>
      <form className="create-form" onSubmit={handleEditPost}>
      <div className="title-prompt">
        <label>Edit Title: </label>
      </div>
      <input
        required
        name="title"
        autoComplete='off'
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* add image selection here */}

      <div className="body-prompt">
        <label>Edit Description: </label>
      </div>
        <textarea
          required
          style={{height: "200px", width: "200px"}}
          name="body"
          autoComplete='off'
          placeholder="Enter description here"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

      <div className="tags-prompt">
        <label>Edit Tags: </label>
      </div>
        <input
          required
          name="tags"
          autoComplete='off'
          placeholder="Ex: apple, pear, tiger"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />        

      <div className="border"></div>
      <button type="submit">Save Changes</button>
    </form>
  </div>
  )
}

export default EditPost