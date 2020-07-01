import React from 'react';
import s from './Profile.module.css';
import Wall from './Wall/Wall';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {newPost, updateNewPosText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div className={s.Content}>
            <ProfileInfo />
            <Wall
                posts={props.profilePage.postData}
                newPost={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;