import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Wall from "./Wall";

const WallContainer = (props) => {
    let posts = props.store.getState().ProfilePage.postData;

    let newPostText = props.store.getState().ProfilePage.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateNewText = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return <Wall addPost={addPost} updateNewText={updateNewText} newPostText={newPostText} posts={posts}/>;
}

export default WallContainer;