import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
const MyPosts = () => {
  return (
    <div className='posts'>
      My posts
      <div>
        <textarea></textarea>
        <button>add post</button>
        <button>delete post</button>
      </div>
      <Post name='Alex' msg="Hello! How it's goin?"/>
      <Post name='Pavel' msg="Здарова. Кд? Чд?"/>
      <Post name='James' msg="Good morning, sir!"/>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MyPosts;