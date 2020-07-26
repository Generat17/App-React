import React from "react";
import {connect} from "react-redux"
import Users from "./Users";
import {followAc, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAc} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (UsersTotalCount) => {
            dispatch(setUsersTotalCountAC(UsersTotalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);