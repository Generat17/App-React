import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={"/Dialogs/0" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogsItem;