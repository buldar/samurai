import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg"/>
            </div>
            <div>
                Ava + discripshn
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div className='posts'>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;