import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let messagesData = [
    {id: 0, message: 'Hi, it s me!'},
    {id: 1, message: 'I have to go'},
    {id: 2, message: 'see u'},
    {id: 3, message: 'bb'},
    {id: 4, message: 'Freddy Cruger'},
    {id: 5, message: '354643'},
    {id: 6, message: 'lift up to reciver'}
]

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

let messageElements =
    messagesData.map(m => <Message message={m.message} id={m.id} />);

let dialogsData = [
    {id: 0, name: 'Boris Prank'},
    {id: 1, name: 'AlexUnder NewSky'},
    {id: 2, name: 'Aliev Timur'},
    {id: 3, name: 'Alexunder Adamov'},
    {id: 4, name: 'Alieva Ludmila'},
    {id: 5, name: 'Goncharova Tatiana'}
]

const DialogsItem = (props) => {
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={"/Dialogs/0" + props.id}>{props.name}</NavLink>
        </div>
    );
}

let dialogsElements =
    dialogsData.map(d => <DialogsItem id={d.id} name={d.name} />);

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>    
                { messageElements }
            </div>
        </div>
    );
}

export default Dialogs;