import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea> </textarea>
                <button> OK</button>
            </div>
            <div className='posts'>
                <Post message="Hey, salaga!" like='23'/>
                <Post message="Omg! Look like one more..." like='123'/>
            </div>
        </div>
    )
}
export default MyPosts;