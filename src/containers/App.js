// src/containers/App.js

import React, { Component } from 'react';
import './App.css';

import {
  PhoneInfoListContainer,
} from '../containers';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* phone-info list Container */}
        <PhoneInfoListContainer />

      </div>
    );
  }
}

export default App;
