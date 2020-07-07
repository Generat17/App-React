import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {newPost} from "./redux/store";
import profileReducer from "./redux/profile-reducer";
import dialogsReducer from "./redux/dialogs-reducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() =>
                    <Profile store={props.store} />
                }/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer store={props.store} />
                }/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
