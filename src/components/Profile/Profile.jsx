import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import WallContainer from "./Wall/WallContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    debugger
    return (
        <div className={s.Content}>
            <ProfileInfo profile={props.profile}/>
            <WallContainer/>
        </div>
    );
}

export default Profile;