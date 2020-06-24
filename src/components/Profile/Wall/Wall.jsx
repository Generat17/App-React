import React from 'react';
import s from './Wall.module.css';
import Post from './Post/Post';
import DialogsItem from "../../Dialogs/DialogItems/DialogsItems";

const Wall = (props) => {
    let PostElements =
        props.posts.map( p => <Post id={p.id} message={p.message}/>);

    return  (
        <div className="Wall">
            <textarea></textarea>
            <button>New Post</button>
            {PostElements}
        </div>
    );
}

export default Wall;