import React from 'react'
import '../../components/PostForm/CreatePost.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'

const PostForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleSubmit}>
      <h1 className='create-title'>Create A Post</h1>
        <div className='horizontal-group'>
          <div className='form-group left'>
            <div className="title-prompt">
              <label>Add Title: </label>
            </div>
              <input className='title-input'
                required
                style={{height: "30px", width: "400px"}}
                name="title"
                autoComplete='off'
                placeholder="Enter title here"
                value={props.title}
                onChange={(e) => props.setTitle(e.target.value)}
              />
          </div>
          <div className='form-group right'>
            <div className="image-prompt">
          <label>Add an Image: </label>
        </div>
          <input className='image-input'
            required
            type='file'
            name="image"
            placeholder="Upload Image Here"
            onChange={(e) => props.setImage(e.target.files[0])}
          />
          </div>
        </div>

        <div className='form-group description'>
          <div className="body-prompt">
            <label>Add Description: </label>
          </div>
            <textarea className='body-input'
              required
              style={{height: "300px", width: "900px"}}
              name="body"
              autoComplete='off'
              placeholder="Enter description here"
              value={props.body}
              onChange={(e) => props.setBody(e.target.value)}
          />
        </div>

        <div className='form-group tags'>
          <div className="tags-prompt">
            <label>Add Tags: </label>
          </div>
            <textarea className='tags-input' 
              style={{height: "100px", width: "300px"}}
              required
              name="tags"
              autoComplete='off'
              placeholder="Ex: apple, pear, tiger"
              value={props.tags}
              onChange={(e) => props.setTags(e.target.value)}
            />
        </div>
          <div className='createBtn-wrapper' variant="primary">
            <button type="submit" className='createBtn'>Create Post</button>
          </div>
    </form>
  )
}

export default PostForm