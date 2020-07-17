import React from "react";
import {connect} from "react-redux"
import Users from "./Users";
import {followAc, setUsersAC, unfollowAc} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId) => {
            dispatch(followAc(userId));
        },
        unfollow : (userId) => {
            dispatch(unfollowAc(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);