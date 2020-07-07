import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import WallContainer from "./Wall/WallContainer";

const Profile = (props) => {
    return (
        <div className={s.Content}>
            <ProfileInfo />
            <WallContainer store={props.store} />
        </div>
    );
}

export default Profile;