  
import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Todo />
        </header>
      </div>
    );
  }
}

export default App;
