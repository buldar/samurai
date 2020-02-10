import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Navigation.module.css'

const Sidefriends = (props) => {

    return (
        <div className={s.onesidefriend}>
        <p> <img src ={props.ava}/> <br/>
            {props.name}
        </p>
        </div>
    )
}


export default Sidefriends;