const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: 0, message: 'Hello! My name\'s Aliev Timur :D'},
        {id: 1, message: 'What makes every.'},
        {id: 2, message: 'American a typical one is a desire!'},
        {id: 3, message: 'to get a well-paid job that.'},
        {id: 4, message: 'Some companies now!'}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: 10, message: state.newPostText}]
            }
        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE :
            return {
                ...state,
                profile: action.profile
            }
        default :
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export default profileReducer;