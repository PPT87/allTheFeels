import React from "react"

const CommentList = (props) => {
  return (
    <div className="comment-card">
      {props.comments?.map((comment) => (

        <div className="comment">
          <img src={comment.commenter.avatar} alt="user avatar" />
          <h3>{comment.commenter.name}</h3>
          <p>
            {comment.comment_text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CommentList