import React from 'react';
import s from './Profile.module.css';
import Wall from './Wall/Wall';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={s.Content}>
            <img src="https://sun9-24.userapi.com/c854532/v854532723/238477/kUYAMp7IJI8.jpg" />
            <ProfileInfo />
            <Wall />
        </div>
    );
}

export default Profile;