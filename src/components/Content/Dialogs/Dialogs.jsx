import React from 'react';
import s from './Dialogs.module.css'
//import DialogItem from './dialogsList/dialogItem';
import DialogsList from './dialogsList/DialogsList/DialogsList';
import Messages from './Messages/Messages/Messages';


const Dialogs = (props) => {
    //let dialogs = props.state.dataDialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    
    return (
        <div className={s.dialogs}>
            <DialogsList state={props.state}/>
            <Messages state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Dialogs;