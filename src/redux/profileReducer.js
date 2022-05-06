const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text });
let initialState = {
    dataPosts: [
        { name: 'Alex', message: "Hello! How it's goin?" },
        { name: 'Pavel', message: 'Здарова.' },
        { name: 'James', message: 'Good morning, sir!' }
      ],
      newPostText: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText === '') return state;
            let copyState = {...state};
            copyState.dataPosts = [...state.dataPosts];
            let newPost = {
                name: 'Pavel',
                message: state.newPostText
            }
            copyState.dataPosts.unshift(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case UPDATE_POST_TEXT: {
            let copyState = {...state};
            copyState.newPostText = action.text;    
            return copyState;
        }
        default:
            return state;
    }
}

export default profileReducer;