import React from 'react';
import s from './Wall.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const Wall = (props) => {
    let PostElements =
        props.posts.map(p => <Post id={p.id} message={p.message}/>);

    let newPostText = props.newPostText;

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className="Wall">
            <div>
                <textarea
                    value={newPostText}
                    onChange={onPostChange}
                    placeholder='Enter your message...'
                />
            </div>
            <div>
                <button onClick={addPost}>
                    New Post
                </button>
            </div>
            {PostElements}
        </div>
    );
}

export default Wall;