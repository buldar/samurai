import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, currentNewPostText} from './redux/state';

let rerenderTree = (state) => {
    ReactDOM.render(<App appState={state} addPost={addPost} currentNewPostText={currentNewPostText}/>, document.getElementById('root'));
}

rerenderTree(state);

subscribe(rerenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
