const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 0, message: 'Hi, it s me!'},
        {id: 1, message: 'I have to go'},
        {id: 2, message: 'see u'},
        {id: 3, message: 'bb'},
        {id: 4, message: 'Freddy Cruger'},
        {id: 5, message: '354643'},
        {id: 6, message: 'lift up to reciver'}
    ],
    dialogsData: [
        {id: 0, name: 'Boris Prank'},
        {id: 1, name: 'AlexUnder NewSky'},
        {id: 2, name: 'Aliev Timur'},
        {id: 3, name: 'Alexunder Adamov'},
        {id: 4, name: 'Alieva Ludmila'},
        {id: 5, name: 'Goncharova Tatiana'}
    ],
    newMessageText : ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            debugger
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messagesData, {id: 10, message: state.newMessageText}]

            }
            debugger
        case UPDATE_NEW_MESSAGE_TEXT :
            return {
                ...state,
                newMessageText: action.newText
            }

        default :
            return state;
    }
}

export const addMessageActionCreator = () => ({
    type : ADD_MESSAGE
});

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type : UPDATE_NEW_MESSAGE_TEXT,
        newText : text
    }
}

export default dialogsReducer;