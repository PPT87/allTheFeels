import React from "react"

const CommentList = (props) => {
  const authorId = props.comment.commenter?._id ? props.comment.commenter._id : props.comment.commenter
  const isAuthor = props.user?.profile === authorId
  console.log(props.user)

  return (
    <div className="comment-card">
      
        <div className="comment">
          <img src={props.comment.commenter.avatar} alt="user avatar" />
          <h3>{props.comment.commenter.name}</h3>
          <p>
            {props.comment.comment_text}
          </p>
          {isAuthor &&
          <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete</button>
          }
        </div>
      
    </div>
  )
}

export default CommentList