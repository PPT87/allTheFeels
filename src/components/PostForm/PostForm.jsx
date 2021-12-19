import React from 'react'

const PostForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="title-prompt">
        <label>Add Title: </label>
      </div>
      <input
        required
        name="title"
        autoComplete='off'
        placeholder="Enter title here"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />

      {/* add image selection here */}

      <div className="body-prompt">
        <label>Add Description: </label>
      </div>
        <textarea
          required
          style={{height: "200px", width: "200px"}}
          name="body"
          autoComplete='off'
          placeholder="Enter description here"
          value={props.body}
          onChange={(e) => props.setBody(e.target.value)}
        />

      <div className="tags-prompt">
        <label>Add Tags: </label>
      </div>
        <input
          required
          name="tags"
          autoComplete='off'
          placeholder="Ex: apple, pear, tiger"
          value={props.tags}
          onChange={(e) => props.setTags(e.target.value)}
        />        

      <div className="border"></div>
      <button type="submit">Create Post</button>
    </form>
  )
}

export default PostForm