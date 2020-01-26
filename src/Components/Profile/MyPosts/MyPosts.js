import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hey, Salaga!', likesCount: 23},
        {id: 2, message: 'Omg! Look like one more...', likesCount: 31},
        {id: 3, message: 'So sad...', likesCount: 6},
    ];

    let postsElements = postsData.map(x => <Post message={x.message} like={x.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;