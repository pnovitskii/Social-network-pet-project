import { addPostActionCreator, updatePostTextActionCreator } from './../../../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dataPosts: state.profilePage.dataPosts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreator()) },
        updatePostText: (text) => { dispatch(updatePostTextActionCreator(text)) }
    } 
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;