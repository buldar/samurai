import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogsData.dialogs.map(x => <DialogItem name={x.name} id={x.id} ava={x.ava}/>);
    let messagesElements = props.dialogsData.messages.map(x => <Message message={x.message} id={x.id}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;