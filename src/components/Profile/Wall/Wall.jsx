import React from 'react';
import s from './Wall.module.css';
import Post from './Post/Post';

const Wall = () => {
    return  (
        <div className="Wall">
            <textarea></textarea>
            <button>New Post</button>
            <Post message="Hello! My name's Aliev Timur :D" />
            <Post message="I'm beginner progmming! "/>
        </div>
    );
}

export default Wall;