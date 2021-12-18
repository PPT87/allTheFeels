import React, { useState } from "react"

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
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="comment-prompt">
        <label>Enter a Comment</label>
      </div>

      <textarea
        required
        style={{height: "200px", width: "200px"}}
        autoComplete='off'
        placeholder="Comment"
        name="comment_text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="border"></div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default CreateComment