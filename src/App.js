import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Asteroids from './Game/Asteroids';

class App extends Component {
  render() {
    Asteroids();
    return (
      <div id="myCanvas">

      </div>
    );
  }
}

export default App;
