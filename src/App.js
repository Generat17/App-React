import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() =>
                    <Profile />
                }/>

                <Route path='/dialogs' render={() =>
                    <DialogsContainer />
                }/>

                <Route path='/users' render={() =>
                    <UsersContainer />
                }/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
