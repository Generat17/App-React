import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.Post}>
            <img src="https://sun1-18.userapi.com/GQReFwiqBXE3IpBvuhY_6RgPI9Wd9mx5bzDzag/5WFOieB_OB8.jpg?ava=1" />
            <b>{props.message}</b>
        </div>
    );
}

export default Post;