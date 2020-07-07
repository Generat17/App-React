const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 0, message: 'Hello! My name\'s Aliev Timur :D'},
        {id: 1, message: 'What makes every.'},
        {id: 2, message: 'American a typical one is a desire!'},
        {id: 3, message: 'to get a well-paid job that.'},
        {id: 4, message: 'Some companies now!'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let currentPost = {
                id: 8,
                message: state.newPostText
            }
            state.postData.push(currentPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText;
            return state;

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

export default profileReducer;