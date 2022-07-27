import React, { Component } from 'react';
import FancyButton from './FancyButton';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
          <FancyButton />
          <FancyButton />
          <FancyButton />
      </div>
    );
  }
}

export default App;
