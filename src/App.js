import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CodeEditor from './CodeEditorContainer.js'
import UserBox from './UserBox.js'
import CodeChallengeBox from './CodeChallengeBox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
        <div className="logo-image"/>
        <div className="title-logo"> PairPal </div>
      </div>
          <br/>
          <br/>
        <CodeChallengeBox
          url='http://192.168.6.119:3001/api/challenges'
          pollInterval={2000}/>
          <br/>
          <br/>
        <CodeEditor/>
      </div>
    );
  }
}

export default App;
