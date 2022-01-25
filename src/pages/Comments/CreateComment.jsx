import React, { useState } from "react"
import "./CommentSection.css"

const CreateComment = (props) => {
	const [text, setText] = useState('')

	const formData = {
    comment_text: text,
    commenter: props.user.profile
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreateComment(formData)
    setText("")
  }

  return (
    <div className="form-div">
      <h2>Comments</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <textarea
          required
          autoComplete='off'
          placeholder="Add Comment Here"
          name="comment_text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='submitBtn' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateComment