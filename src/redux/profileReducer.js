const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text });

const profileReducer = (action, state) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText === '') return state;
            let newPost = {
                name: 'Pavel',
                message: state.newPostText
            }
            state.dataPosts.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export default profileReducer;