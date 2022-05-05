import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from './../../../../redux/profileReducer';//'../../../../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };
    let updatePostText = (text) => {
        let action = updatePostTextActionCreator(text);
        props.store.dispatch(action);
    };
    return (
        <MyPosts
            dataPosts={state.profilePage.dataPosts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost} 
            updatePostText={updatePostText}
        />
    )
}

export default MyPostsContainer;