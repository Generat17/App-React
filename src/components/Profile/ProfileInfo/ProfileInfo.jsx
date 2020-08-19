import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    debugger

    if (!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <img src={props.profile.photos.large} />
        </div>
    );
}

export default ProfileInfo;
