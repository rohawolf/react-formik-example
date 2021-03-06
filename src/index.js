// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  App
} from './containers';

import * as serviceWorker from './serviceWorker';

// modules for store
import { createStore } from 'redux';
import reducers from './modules';
import { Provider } from 'react-redux';

// create store
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
