import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let dialogElements = props.dialogsData.dialogs.map(x => <DialogItem name={x.name} id={x.id} ava={x.ava}/>);
    let messagesElements = props.dialogsData.messages.map(x => <Message message={x.message} id={x.id}/>);
    let newMessageBody = props.dialogsData.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='add message'>  </textarea></div>
                <div><button onClick={onSendMessageClick}>SEND</button></div>
            </div>
        </div>
    )
}

export default Dialogs;