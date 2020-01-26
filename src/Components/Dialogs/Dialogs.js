import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'> Vitaly </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'> Andrey </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'> Sasha </NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are u?</div>
                <div className={s.message}>What are u doing here?</div>
            </div>
        </div>
    )
}

export default Dialogs;