import * as serviceWorker from './serviceWorker';
import state, {newPost, subscribe, updateNewPosText} from './redux/state';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} newPost={newPost} updateNewPostText={updateNewPosText}/>
        </React.StrictMode>, document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
