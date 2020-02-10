import React from "react";
import {NavLink} from "react-router-dom";

const Sidefriends = (props) => {

    return (
        <p> <img src ={props.ava}/> <br/>
            {props.name}
        </p>
    )
}


export default Sidefriends;