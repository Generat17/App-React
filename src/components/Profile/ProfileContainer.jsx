import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux"

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        debugger
        return (
            <div className={s.Content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    a : 14
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);