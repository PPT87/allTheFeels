import React from 'react' 
import { Link } from 'react-router-dom'


const PostInfo = (props) => {

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
            <img src={props.post.added_by.avatar} alt="user avatar"/>
            <Link to={`/profile/${props.post.added_by._id}`}><h2>{props.post.added_by.name}</h2></Link>
            {isAuthor &&
              <button><Link to={`/posts/${props.post._id}/edit`} state={props.post} >Edit Post</Link></button>
            } 
          </div>
        </div>
        <div className="postInfoDiv">
          <div className="postBody">
            <p>{props.post.body}</p>
          </div>
          <div className="postTags">
            <p><b>Tags:</b> {allTags}</p>
          </div>
        </div>
    </div>
    
  )

}

export default PostInfo