import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt='Tut kartinka profil9'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + discripshn
            </div>
        </div>
    )
}
export default ProfileInfo;