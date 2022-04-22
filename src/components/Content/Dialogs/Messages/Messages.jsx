import React from 'react';
import s from './messages.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
        <div className={s.space}></div>
        <div className={s.text}>
            {props.text}
        </div>
        <div className={s.space}></div>
    </div>
    )
};
const Messages = (props) => {
    let data = {
        messages: [
            {text: 'Ладно'},
            {text: 'Здарова, челик... Кд? Чд?'},
            {text: 'Hello!'},
            {text: 'Привет!'},
            {text: 'The quick brown fox jumps over the lazy dog.'},
            {text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!аааааааааааа аааааааа ааааааааааа аааааааа ааааааааа ааааааааа аааааа ааааааа аааааааа аааааааа ааааа аааааа аааааааа аааааааа'},
            {text: 'The quick brown fox jumps over the lazy dog.'},
            {text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!'},
            {text: 'The quick brown fox jumps over the lazy dog.'},
            {text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!'},
            {text: 'The quick brown fox jumps over the lazy dog.'},
            {text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!'},
            {text: 'The quick brown fox jumps over the lazy dog.'},
            {text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!'},
            {text: 'The quick brown fox jumps over the lazy dog.'},
            {text: 'В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!'}
        ]
    };
    let messages = data.messages.map( message => <Message text={message.text}/>)
    return (
        <div className={s.body}>
            <div className={s.messages}>
                {/* <Message text='Привет!'/> */}
                {messages}
            </div>

            <div className={s.textInput}>
                <input type='text' spellcheck="false" className={s.input}></input>
            </div>
        </div>
    )
};

export default Messages;