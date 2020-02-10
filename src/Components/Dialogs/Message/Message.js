import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    let classForMessages = (props.id === 1)? s.mymessage:s.notmymessage;

    return (
        <div className={classForMessages}>{props.message}</div>
    )
}


export default Message;