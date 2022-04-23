import React from 'react';
import s from './messages.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            {/* <div className={s.space}></div> */}
            <div className={s.text}>
                {props.text}
            </div>
            {/* <div className={s.space}></div> */}
        </div>
    )
};

const Messages = (props) => {
    let messages = props.dataMessages.map(message => <Message text={message.text} />)
    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        if (text === '') return;
        props.addMessage(text);
        newMessage.current.value = '';
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') sendMessage();
    }
    return (
        <div className={s.body}>
            <div className={s.messages}>
                {messages}
            </div>

            <div className={s.textInput}>
                <input onKeyDown={handleKeyDown} ref={newMessage} type='text' spellcheck='false' className={s.input} placeholder='Напишите сообщение...'></input>

                <span className="material-symbols-outlined" onClick={ sendMessage }>
                    send
                </span>

            </div>
        </div>
    )
};

export default Messages;