import React from "react"
import { Link } from 'react-router-dom'
import "./CommentSection.css"
import xLogo from '../../assets/icons/x-icon.png'

const CommentList = (props) => {
  const authorId = props.comment.commenter?._id ? props.comment.commenter._id : props.comment.commenter
  const isAuthor = props.user?.profile === authorId

  return (
    <div className="comment-card">
        <div className="comment">
          <img src={props.comment.commenter.avatar} alt="user avatar" className="avatar"/>
          <Link to={`/profile/${props.comment.commenter._id}`}><h3>{props.comment.commenter.name}</h3></Link>
          <p>
            {props.comment.comment_text}
          </p>
          {isAuthor &&
          <div className='deleteBtn'>
          <img src={xLogo} alt='delete post icon' onClick={() => props.handleDeleteComment(props.comment._id)} />
        </div>
          }
        </div>
    </div>
  )
}

export default CommentList