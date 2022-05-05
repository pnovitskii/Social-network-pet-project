import React from 'react';
import s from './Dialogs.module.css'
//import DialogItem from './dialogsList/dialogItem';
import DialogsList from './dialogsList/DialogsList/DialogsList';
//import Messages from './Messages/Messages/Messages';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    //let dialogs = props.state.dataDialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    
    return (
        <div className={s.dialogs}>
            <DialogsList state={props.store.getState().messagesPage}/>
            <MessagesContainer store={props.store}/>
        </div>
    )
}

export default Dialogs;