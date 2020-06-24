import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from './DialogItems/DialogsItems';
import Message from './Messages/Messages';

const Dialogs = (props) => {

    let dialogsElements =
        props.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>);

    let messageElements =
        props.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;