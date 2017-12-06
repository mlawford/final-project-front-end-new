import React, { Component } from 'react';
import PracticeProblems from './PracticeProblems'
import PracticeEditor from './PracticeEditor'

class PracticeContainer extends Component {

  render() {
    return (
      <div className="PracticeContainer">
      <div className="header">
        <div className="logo-image"/>
        <div className="title-logo"> Print </div>
      </div>
        <PracticeProblems
        url='http://192.168.6.119:3001/api/challenges'
        pollInterval={2000}/>
        <PracticeEditor/>
      </div>
    )
  }
}

export default PracticeContainer;
