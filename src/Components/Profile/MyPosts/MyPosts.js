import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                <button> OK</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hey, salaga!" like='23'/>
                <Post message="Omg! Look like one more..." like='123'/>
            </div>
        </div>
    )
}
export default MyPosts;