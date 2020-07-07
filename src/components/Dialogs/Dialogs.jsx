import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItems/DialogsItems';
import Message from './Messages/Messages';

const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>);

    let messageElements =
        props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    let newMessageText = props.state.newMessageText;

    let onSendMessageClick = () => {
        props.SendMessage();
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea
                            value={newMessageText}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message...'
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;