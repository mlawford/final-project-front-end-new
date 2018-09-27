import React, { Component } from 'react';
import './App.css';
import LobbyBox from './LobbyComponents/LobbyBox.js'
import {Route } from 'react-router-dom';
import SessionContainer from './CodeChallengeComponents/SessionContainer.js'
import LandingPage from './LandingPage.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <LandingPage {...props}/> }/>
        <Route exact path="/session" component={SessionContainer}/>
        <Route exact path="/lobbies" component={LobbyBox}/>
      </div>
    );
  }
}

export default App;
