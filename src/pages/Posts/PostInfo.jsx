import React from 'react' 
import { Link, useNavigate} from 'react-router-dom'
import './PostDetails.css'
import xLogo from '../../assets/icons/x-icon.png'
import editLogo from '../../assets/icons/edit.png'

import * as postService from '../../services/postService'

const PostInfo = (props) => {
  const navigate = useNavigate()
  const handleDeletePost = async (postId) => {
    try {
      await postService.deletePost(postId)
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }

  const allTags = props.post.tags.map((tag, index) => (
    <p key={index} >{tag.tagName}</p>
  ))
  const authorId = props.post.added_by?._id ? props.post.added_by._id : props.post.added_by
  const isAuthor = props.user?.profile === authorId

  return (
    <div className="postInfo">
      <div className="leftContainer">
        <div className="postImage">
          <img src={props.post.image} alt="User Uploaded Img"/>
        </div>
          <div className="postTitle">
            <h1>{props.post.title}</h1>
          </div>
          <div className="postUser">
            <h2>By:</h2>
            <Link to={`/profile/${props.post.added_by._id}`}><h2>{props.post.added_by.name}</h2></Link>
            {isAuthor &&
            <>
            <Link className='updateLink' to={`/posts/${props.post._id}/edit`} state={props.post} > <img src={editLogo} alt="edit post icon" /> </Link>

            <div className='deleteBtn'>
              <img src={xLogo} alt='delete post icon' onClick={() => handleDeletePost(props.post._id)} />
            </div>

            </>
            } 
        </div>
      </div>
        <div className="postInfoDiv">
          <div className="postBody">
            <p>{props.post.body}</p>
          </div>
          <div className="postTags">
            <div style={{display: 'flex'}}><p><b>Tags:</b></p> {allTags}</div>
          </div>
        </div>
    </div>
    
  )
}

export default PostInfo