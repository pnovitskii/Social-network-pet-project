import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

// const posts = 

const MyPosts = () => {
  return (
    <div className={s.posts}>
      {/* My posts */}
      {/* <div>
        <textarea></textarea>
        <button>add post</button>
        <button>delete post</button>
      </div> */}
      <Post name='Alex' msg="Hello! How it's goin?"/>
      <Post name='Pavel' msg="Здарова."/>
      <Post name='James' msg="Good morning, sir!"/>
      
    </div>
  )
}

export default MyPosts;