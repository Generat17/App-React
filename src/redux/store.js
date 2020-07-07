import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        messagePage: {
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
        },
        profilePage: {
            postData: [
                {id: 0, message: 'Hello! My name\'s Aliev Timur :D'},
                {id: 1, message: 'What makes every.'},
                {id: 2, message: 'American a typical one is a desire!'},
                {id: 3, message: 'to get a well-paid job that.'},
                {id: 4, message: 'Some companies now!'}
            ],
            newPostText: ''
        }
    },
    _callSubscriber() {
        console.log('hello');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;