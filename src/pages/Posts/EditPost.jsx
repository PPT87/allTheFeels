import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router'
import { useLocation, useNavigate } from 'react-router-dom'

// Components
import Header from '../../pages/Header/Header'

//Services
import * as postService from '../../services/postService'

const EditPost = (props) => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [image, setImage] = useState('')
  const [formData, setFormData] = useState(location.state)
  const {title, body, tags} = formData

  props.setTitle('Edit Post')

  const handleEditPost = async (e) => {
    e.preventDefault()
    try {
      let finalFormData = { ...formData }      
      if (image) {
        const data = new FormData()
        data.append('file', image)
        data.append("upload_preset", "rkjmljnm")
        data.append('folder', 'allthefeels')
        data.append("cloud_name","allthefeels")
        const res = await (await fetch("https://api.cloudinary.com/v1_1/allthefeels/image/upload", {
          method: "post",
          body: data
        })).json()
        finalFormData.image=res.url
      }
      const updatedPost = await postService.updatePost(finalFormData)
      navigate(`/posts/${id}`)
    } catch (error) {
      throw error
    }
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleDeletePost = async (postId) => {
    try {
      await postService.deletePost(postId)
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await postService.getPostById(id)      
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


  return (
    <div className="layout">
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
        onChange={handleChange}
      />

      <div className="image-prompt">
        <label>Add an Image: </label>
      </div>
      <input
        type='file'
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />


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
          value={tags}
          onChange={handleChange}
        />        

      <div className="border"></div>
      <button type="submit">Save Changes</button>
    </form>
    <button onClick={() => handleDeletePost(id)}>Delete</button>
  </div>
  )
}

export default EditPost