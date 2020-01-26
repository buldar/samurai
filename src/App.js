import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const App = () => {
    let postsData = [
        {id: 1, message: 'Hey, Salaga!', likesCount: 23},
        {id: 2, message: 'Omg! Look like one more...', likesCount: 31},
        {id: 3, message: 'So sad...', likesCount: 6},
    ];
    let dialogsData = [
        {id: 1, name: 'Vitaly'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
    ];
    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What are u doing here?'},
        {id: 3, message: 'Pffff, another one!'},
    ];
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                {/*<Route path='/profile' component = {Profile}/>*/}
                {/*<Route path ='/dialogs' component = {Dialogs}/>*/}
                <Route path ='/profile' render = {() => <Profile postsData={postsData}/>}/>
                <Route path ='/dialogs' render = {() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                <Route path ='/news' component = {News}/>
                <Route path ='/music' component = {Music}/>
                <Route path ='/settings' component = {Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
