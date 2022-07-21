import React from 'react';
import './App.css';

const tasks = ['Dormir', 'Comer', 'Estudar', 'Beber'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render () {
  return (
    <div className="App">
      <ul>
        {tasks.map(Task)}
      </ul>
    </div>
  );
  }
}

export default App;
