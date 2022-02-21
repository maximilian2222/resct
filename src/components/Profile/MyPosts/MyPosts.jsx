import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
        My posts
        <div>
            <textarea></textarea>
            <button>add </button>
        </div>
            <div className= {s.item}>
                <Post />
                <Post massage= 'Hisss' likesCount ='0' />
                <Post mas= 'sds' likesCount ='23'/>
            </div>
        </div>
    )
}
export default MyPosts