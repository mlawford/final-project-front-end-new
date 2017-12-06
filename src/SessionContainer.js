import React, { Component } from 'react';
import CodeChallengeBox from './CodeChallengeBox.js'
import CodeEditor from './CodeEditorContainer.js'

class SessionContainer extends Component {

 render() {
   return (
   <div>
   <div className="header">
     <div className="logo-image"/>
     <div className="title-logo"> Print </div>
   </div>
     <br/>
     <CodeChallengeBox
       url='http://192.168.6.119:3001/api/challenges'
       pollInterval={2000}/>
     <br/>
     <br/>
     <CodeEditor/>
   </div>
   )
 }
}
export default SessionContainer;
