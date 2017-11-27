import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CodeEditor from './CodeEditorContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Code Challenge #1</h1>
          <h4> Take the last element off of this array: [1,2,3] </h4>
          <br/>
        </header>
        <CodeEditor/>
      </div>
    );
  }
}

export default App;
