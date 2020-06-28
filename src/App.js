import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {newPost} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile
                        posts={props.appState.profilePage.postData}
                        newPost={props.newPost}
                        newPostText={props.appState.profilePage.newPostText}
                        updateNewPostText={props.updateNewPostText}

                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        messagesData={props.appState.messagePage.messagesData}
                        dialogsData={props.appState.messagePage.dialogsData}
                    />}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
