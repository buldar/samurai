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
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                {/*<Route path='/profile' component = {Profile}/>*/}
                {/*<Route path ='/dialogs' component = {Dialogs}/>*/}
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>

    );
}


export default App;
