import React from 'react';
import Message from './Message/Message';
import s from './messages.module.css';

const Messages = (props) => {
    
    let messages = props.state.dataMessages.map( message => <Message text={message.text} />);
    let newMessage = React.createRef();
    let updateTextMessage = () => {
        let text = newMessage.current.value;
        // props.updateTextMessage(text);
        props.dispatch( { type: 'UPDATE-MESSAGE-TEXT', text: text } );
    }
    const handleKeyDown = (e) => { if (e.key === 'Enter') props.dispatch( { type: 'ADD-MESSAGE' } ) };
    
    return (
        <div className={s.body}>
            <div className={s.messages}>
                {messages}
            </div>

            <div className={s.textInput}>
                <input
                    onKeyDown={handleKeyDown}
                    ref={newMessage}
                    type='text'
                    spellcheck='false'
                    className={s.input}
                    placeholder='Напишите сообщение...'
                    value={props.state.newTextMessage}
                    onChange={updateTextMessage}>
                </input>

                <span className="material-symbols-outlined" onClick={()=>props.dispatch({type: 'ADD-MESSAGE'})}>
                    send
                </span>

            </div>
        </div>
    )
};

export default Messages;