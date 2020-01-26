import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
