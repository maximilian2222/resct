import React from "react";
import './App.css'
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogss/Dialogs";


const App = () => {
    return (
        <div
            className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className = 'app-wrapper-content'>
                <Dialogs/>
            </div>
            {/*<Profile />*/}
            </div>

            );
            };

export default App;

