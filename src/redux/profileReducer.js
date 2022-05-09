

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const addPostActionCreator = (name) => ({ type: ADD_POST, name: name });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text });





let initialState = {
    dataPosts: [
        
        // { name: 'Alex', message: "Hello! How it's goin?" },
        // { name: 'Pavel', message: 'Здарова.' },
        // { name: 'James', message: 'Good morning, sir!' }
      ],
      newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText === '') return state;
            return {
                ...state,
                dataPosts: [ { name: action.name === undefined ? 'Pavel' : action.name , message: state.newPostText }, ...state.dataPosts ],
                newPostText: ''
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default:
            return state;
    }
}

export default profileReducer;