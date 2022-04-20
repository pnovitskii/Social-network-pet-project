import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './dialogsList/dialogItem';



const Dialogs = (props) => {
    debugger;
    let dialogs = props.dataDialogs.map(dialog => <DialogItem name={dialog.name} />);
    
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
                Messages
            </div>
        </div>
    )
}

export default Dialogs;