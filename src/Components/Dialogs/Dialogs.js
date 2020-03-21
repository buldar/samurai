import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.state;

    let dialogElements = state.dialogs.map(x => <DialogItem name={x.name} id={x.id} ava={x.ava}/>);
    let messagesElements = state.messages.map(x => <Message message={x.message} id={x.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    let onNewMessageChange = (e) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                               placeholder='add message'>  </textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;