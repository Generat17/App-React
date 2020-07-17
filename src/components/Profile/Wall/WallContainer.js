import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Wall from "./Wall";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.postData,
        newPostText: state.ProfilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const WallContainer = connect(mapStateToProps,mapDispatchToProps)(Wall);

export default WallContainer;