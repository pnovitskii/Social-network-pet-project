const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, text: text });

const messagesReducer = (action, state) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newTextMessage === '') return state;
            let newMessage = { text: state.newTextMessage };
            state.dataMessages.unshift(newMessage);
            state.newTextMessage = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newTextMessage = action.text;
            return state;
        default:
            return state;
    }
}

export default messagesReducer;