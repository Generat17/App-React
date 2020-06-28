import React from 'react';
import s from './Wall.module.css';
import Post from './Post/Post';

const Wall = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.newPost(text);
    }

    let PostElements =
        props.posts.map( p => <Post id={p.id} message={p.message}/>);

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return  (
        <div className="Wall">
            <textarea
                ref={newPostElement}
                onChange={onPostChange}
                value={props.newPostText}
            />
            <button onClick={addPost}>New Post</button>
            {PostElements}
        </div>
    );
}

export default Wall;