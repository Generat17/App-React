import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './index.css';
import store from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={state}
                newPost={store.newPost.bind(store)}
                updateNewPostText={store.updateNewPosText.bind(store)}/>
        </React.StrictMode>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
