import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Vitaly'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
    ];
    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What are u doing here?'},
        {id: 3, message: 'Pffff, another one!'},
    ];

    let dialogElements = dialogsData.map(x => <DialogItem name={x.name} id={x.id}/>);
    let messagesElements = messagesData.map(x => <Message message={x.message} id={x.id}/>);
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