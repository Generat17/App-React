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
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile
                    profilePage={props.appState.profilePage}
                    dispatch={props.dispatch}

                />}/>
                <Route path='/dialogs' render={() => <Dialogs
                    state={props.appState.messagePage}
                    dispatch={props.dispatch}
                />}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
