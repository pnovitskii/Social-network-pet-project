import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './dialogsList/dialogItem';
import Messages from './Messages/Messages';


const Dialogs = (props) => {
    let dialogs = props.state.dataDialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                <div className={s.cap}>
                    <div className={s.text}></div>
                </div>
                <div className={s.items}>
                    {dialogs}
                </div>
                <div className={s.bot}></div>
            </div>
            <div className={s.dialogMessages}>
                <Messages dataMessages={props.state.dataMessages} newTextMessage={props.state.newTextMessage} addMessage={props.addMessage} updateTextMessage={props.updateTextMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;