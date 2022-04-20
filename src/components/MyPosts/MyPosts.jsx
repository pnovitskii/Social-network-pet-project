import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'




const MyPosts = (props) => {
  let posts = props.dataPosts.map(post => <Post name={post.name} msg={post.message}/>);
  return (
    <div className={s.posts}>
      {/* My posts */}
      {/* <div>
        <textarea></textarea>
        <button>add post</button>
        <button>delete post</button>
      </div> */}
      {posts}
    </div>
  )
}

export default MyPosts;