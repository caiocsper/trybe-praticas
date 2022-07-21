import React from 'react';
import './App.css';

const message = 'Hello, JSX';
const element = <h1> {message} </h1>;

class App extends React.Component {
  render() {
    return (
            <div>
              {element}
              <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
            </div>
           );
  }
}

export default App;
