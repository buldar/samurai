import React from "react";
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import Sidefriends from "./Sidefriends/Sidefriends";


const Navigation = (props) => {
   // let naviElements = props.sidebar.friends.map(x => <Sidefriends ava={x.ava} name={x.name}/>)
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to ='/profile' activeClassName={s.active}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/dialogs'activeClassName={s.active}> Dialogs </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/news'activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='music'activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='settings'activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.navifriends}>
                <div >
                    <h1>FRIENDS</h1>
                </div>
                <div className={s.testclass}>
                    {/*{naviElements}*/}
                </div>
            </div>
        </div>
    )
}
export default Navigation;