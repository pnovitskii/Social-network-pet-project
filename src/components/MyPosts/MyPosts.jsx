import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
  let addPost = () => {
    
    
    let text = newPost.current.value;
    props.addPost(text);
    newPost.current.value = '';
  };
  let newPost = React.createRef();
  let posts = props.dataPosts.map(post => <Post name={post.name} msg={post.message} />);
  return (
    <div className={s.posts}>
      {/* My posts */}
      <div>
        <textarea ref={newPost}></textarea>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      {posts}
    </div>
  )
}

export default MyPosts;