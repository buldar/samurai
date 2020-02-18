import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.postsData.posts.map(x => <Post message={x.message} like={x.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let currentPostChange = () => {
        props.currentNewPostText(newPostElement.current.value);
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={currentPostChange} ref={newPostElement} value={props.postsData.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}> OK</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;