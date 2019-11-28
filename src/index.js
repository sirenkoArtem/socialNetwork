import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { likesCount: 13, message: 'Hi, how R U?' },
    { likesCount: 15, message: 'It\'s my first post' }
]

let dialogs = [
    { id: 1, name: 'Denis' },
    { id: 2, name: 'Artem' },
    { id: 3, name: 'Tanya' },
    { id: 4, name: 'Yaroslav' },
    { id: 5, name: 'Rostyslav' },
    { id: 6, name: 'Sveta' }
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 1, message: 'How R U?' },
    { id: 1, message: 'Yeah' }
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
