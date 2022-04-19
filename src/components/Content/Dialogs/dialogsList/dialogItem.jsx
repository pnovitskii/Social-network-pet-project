import React from 'react';
import s from './../Dialogs.module.css';
const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <div className={s.avatar}>
                <img src='https://cdn.impactinit.com/cdn/x/x@f59b8e3f78/smss52/smsimg30/pv/ingimagecontributors/ing_47129_23497.jpg' />
            </div>
            <div>
                {props.name}
            </div>
            
        </div>
    )
}
export default DialogItem