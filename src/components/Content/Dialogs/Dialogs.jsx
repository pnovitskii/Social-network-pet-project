import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './dialogsList/dialogItem';
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            
            <div className={s.dialogsList}>
            <div className={s.cap}>
                <div className={s.text}>List</div>
            </div>
                {/* List */}
                <DialogItem name='Pavel'/>    
                <DialogItem name='Pavel'/>    
                <DialogItem name='Pavel'/>    
                <DialogItem name='Pavel'/>    
                <DialogItem name='Pavel'/>    
                <DialogItem name='Pavel'/>    
                <DialogItem name='Pavel'/>      
                <div className={s.bot}></div>
            </div>
            
            <div className={s.dialogMessages}>
                Messages
            </div>
        </div>
    )
}

export default Dialogs;