import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={props.addPost} currentNewPostText={props.currentNewPostText}/>
        </div>
    )
}
export default Profile;