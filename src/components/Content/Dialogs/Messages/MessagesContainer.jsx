import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from './../../../../redux/messagesReducer';
import Messages from './Messages/Messages';

const MessagesContainer = (props) => {
    let state = props.store.getState().messagesPage;
    let updateTextMessage = (text) => {
        let action = updateMessageTextActionCreator(text);
        props.store.dispatch(action);
    }
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return (
        <Messages
            messages={state.dataMessages}
            newTextMessage={state.newTextMessage}
            updateTextMessage={updateTextMessage}
            addMessage={addMessage} />
    )
};

export default MessagesContainer;