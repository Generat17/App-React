import React from 'react';
import DialogsItem from './DialogItems/DialogsItems';
import Message from './Messages/Messages';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().DialogsPage;
    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return <Dialogs updateNewMessageText={onNewMessageChange} SendMessage={onSendMessageClick} state={state}/>
}

export default DialogsContainer;