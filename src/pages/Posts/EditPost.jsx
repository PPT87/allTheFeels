import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

// Components
import Header from '../../pages/Header/Header'

//Services
import * as postService from '../../services/postService'

const EditPost = () => {
  const [formData, setFormData] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()


  const handleEditPost = async (e) => {
    e.preventDefault()
    try {
      const updatedPost = await postService.updatePost(formData)
      console.log(updatedPost)
      console.log("THIS IS NAVIGATING TO POST/ID")
      navigate(`/posts/${id}`)
    } catch (error) {
      throw error
    }
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await postService.getPostById(id)
        console.log(postData)        
        postData.tags = postData.tags.map((tag) => (
          tag.tagName
        )).join(', ')
        setFormData(postData)
      } catch (error) {
        throw error
      }
    }
    fetchPost()
  }, [id])

  console.log('this is form data', formData)
  
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
        value={formData.title}
        onChange={handleChange}
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
          value={formData.body}
          onChange={handleChange}
        />

      <div className="tags-prompt">
        <label>Edit Tags: </label>
      </div>
        <input
          required
          name="tags"
          autoComplete='off'
          placeholder="Ex: apple, pear, tiger"
          value={formData.tags}
          onChange={handleChange}
        />        

      <div className="border"></div>
      <button type="submit">Save Changes</button>
    </form>
  </div>
  )
}

export default EditPost