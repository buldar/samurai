import React from "react";
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a> Profile </a>
            </div>
            <div className={s.item}>
                <a> Messages </a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
        </div>
    )
}
export default Navigation;