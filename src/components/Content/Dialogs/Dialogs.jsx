import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                List
            </div>
            <div className={s.dialogMessages}>
                Messages
            </div>
        </div>
    )
}

export default Dialogs;