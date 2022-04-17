import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

let data = [
  {name:'Alex', message:"Hello! How it's goin?" },
  {name:'Pavel' , message:'Здарова.' },
  {name:'James' , message:'Good morning, sir!' }
];
let posts = data.map(post => <Post name={post.name} msg={post.message}/>);

const MyPosts = () => {
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