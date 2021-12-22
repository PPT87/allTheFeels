import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../components/PostForm/CreatePost.css'

// Components

//Services
import * as postService from '../../services/postService'

const EditPost = (props) => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [image, setImage] = useState('')
  const [formData, setFormData] = useState(location.state)
  const {title, body, tags} = formData

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
      await postService.updatePost(finalFormData)
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
        <h1 className='edit-title'>Edit Post</h1>
      <form className="create-form" onSubmit={handleEditPost}>

        <div className='horizontal-group'>
          <div className='form-group left'>
            <div className="title-prompt">
              <label>Edit Title: </label>
            </div>
              <input className='title-input'
              style={{height: "30px", width: "400px"}}
                required
                name="title"
                autoComplete='off'
                placeholder="Enter title here"
                value={title}
                onChange={handleChange}
              />
            </div>
              <div className='form-group right'>
            <div className="image-prompt">
              <label>Add an Image: </label>
          </div>
            <input
              type='file'
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>

      <div className='form-group description'>
        <div className="body-prompt">
          <label>Edit Description: </label>
        </div>
          <textarea className='body-input'
            required
            style={{height: "300px", width: "900px"}}
            name="body"
            autoComplete='off'
            placeholder="Enter description here"
            value={body}
            onChange={handleChange}
          />
      </div>

      <div className='form-group tags'>
        <div className="tags-prompt">
          <label>Edit Tags: </label>
        </div>
          <textarea className='tags-input'
            style={{height: "100px", width: "300px"}}
            required
            name="tags"
            autoComplete='off'
            placeholder="Ex: apple, pear, tiger"
            value={tags}
            onChange={handleChange}
          />
      </div>
      <div className='btnWrapper'>
        <button type="submit" className='updateBtn'>Save Changes</button>
        <button onClick={() => handleDeletePost(id)} className='deleteBtn'>Delete Post</button>
      </div>
    </form>
  </div>
  )
}

export default EditPost