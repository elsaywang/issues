import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import REST_SERVICES from './services/apis';

class App extends Component {
  render() {
    let a = `${REST_SERVICES.APP_HOME}${REST_SERVICES.ISSUES}`;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Git Issues Portal</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {a}
        </p>
      </div>
    );
  }
}

export default App;
