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

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation sidebar={props.appState.sidebar}/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/profile' component = {Profile}/>*/}
                    {/*<Route path ='/dialogs' component = {Dialogs}/>*/}
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsData={props.appState.dialogsPage} store={props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
