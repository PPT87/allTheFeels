import React from 'react' 
import { Link } from 'react-router-dom'

const PostInfo = (props) => {

  const allTags = props.post.tags.map((tag) => (
    <h3>{tag.tagName}</h3>
  ))

  return (
    <div className="postInfo">
      <div className="postImage">
        <image src={props.post.image} alt="image"></image>
      </div>
      <div className="postTitle">
        <h1>{props.post.title}</h1>
      </div>
      <div className="postUser">
        <image src={props.post.added_by.avatar} alt="user avatar"></image>
        <h2>{props.post.added_by.name}</h2>
        <button><Link to="/edit">Edit Post</Link></button>
      </div>
      <div className="postTags">
        {allTags}
      </div>
    </div>
  )

}

export default PostInfo