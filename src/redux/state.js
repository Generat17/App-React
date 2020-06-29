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
            ]
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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('hello');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    newPost(newMessage) {
        let currentPost = {
            id: 5,
            message: newMessage
        }

        this._state.profilePage.postData.push(currentPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPosText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;