import React from "react";
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'/>
            {props.massage}
            {props.mas}
            <div>
        <span>like</span> {props.likesCount}
    </div>
    </div>

            )
}




        export default Post