import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//axios.defaults.baseURL = 'http://localhost:3000/api;
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();