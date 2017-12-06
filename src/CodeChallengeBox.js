import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateCodeChallenge } from '../src/actions/code-editor.js';
import { storeChallenges } from '../src/actions/code-editor.js';
import { updateCode } from '../src/actions/code-editor.js';
import { bindActionCreators } from 'redux';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/theme/twilight';
import 'brace/theme/solarized_light';

class CodeChallengeBox extends Component {
 constructor(props) {
   super(props);
    this.loadChallengesFromServer = this.loadChallengesFromServer.bind(this);
    this.defaultEditor = `//User: ${this.props.currentUser} \n //Start coding here!`
    this.beginnerChallenges = []
    this.intermediateChallenges = []
    this.advancedChallenges = []
    this.easyToggle = false
    this.mediumToggle = false
    this.hardToggle = false
 }

  handleClick = (event) => {
    this.resetToggles()

    if (this.beginnerChallenges.length === 0){
      this.props.challenges.forEach(challenge => {
        if(challenge.difficulty === "Beginner"){
          this.beginnerChallenges.push(challenge)
        } else if(challenge.difficulty === "Intermediate"){
          this.intermediateChallenges.push(challenge)
        } else {
          this.advancedChallenges.push(challenge)
        }
      })
    }

      if(event.target.innerText === "Beginner"){
        this.easyToggle = true;
      } else if(event.target.innerText === "Intermediate"){
        this.mediumToggle = true;
      } else {
        this.hardToggle = true;
      }
      this.props.updateCode(this.props.currentCode)
  }

  resetToggles = () => {
    this.easyToggle = false
    this.mediumToggle = false
    this.hardToggle = false
  }

  resetChallenges = () => {
    this.beginnerChallenges = []
    this.intermediateChallenges = []
    this.advancedChallenges = []
  }

  showChallenge = (event) => {

    this.props.updateCode(this.defaultEditor)
    let newPayload = {content: event.target.value.toString(), answer:  event.target.name.toString()}
    this.props.updateCodeChallenge(newPayload)
  }
   loadChallengesFromServer() {
     axios.get(this.props.url)
     .then(res => {
       this.props.storeChallenges(res.data);
     })

   }

   componentDidMount() {
     this.loadChallengesFromServer();
     setInterval(this.loadChallengesFromServer, this.props.pollInterval);
   }



 render() {
   return (
     <div>
     <button className="mode-button button6" onClick={this.handleClick}> Beginner </button>
     <button className="mode-button button8" onClick={this.handleClick}> Intermediate </button>
     <button className="mode-button button7" onClick={this.handleClick}> Advanced </button>
     <br/>
     {this.easyToggle === true? this.beginnerChallenges.map((challenge,idx) => {
       return(
           <button className="mode-button button6" value={challenge.content} name={challenge.answer}key={idx} onClick={this.showChallenge}> {idx+1} </button>
         )
         })
       :null }

     {this.mediumToggle === true? this.intermediateChallenges.map((challenge,idx) => {
       return(
           <button className="mode-button button8" value={challenge.content} name={challenge.answer}key={idx} onClick={this.showChallenge}> {idx+1} </button>
         )
         })
       :null }

     {this.hardToggle === true? this.advancedChallenges.map((challenge,idx) => {
       return(
           <button className="mode-button button7" value={challenge.content} name={challenge.answer} key={idx} onClick={this.showChallenge}> {idx+1} </button>
         )
         })
       :null }

       <div className="code-challenge">
       <AceEditor
         mode="javascript"
         theme="solarized_light"
         name="editor"
         width="100%"
         height="100%"
         editorProps={{$blockScrolling: false}}
         fontSize={16}
         readOnly={true}
         showPrintMargin={false}
         showGutter={true}
         highlightActiveLine={false}
         value={this.props.currentChallengeContent}
         wrapEnabled={true}
         indentedSoftWrap= {false}


         />
       </div>
     </div>

   )
 }
}

function mapStateToProps(state){
  return {currentChallengeContent: state.currentChallengeContent, currentChallengeAnswer: state.currentChallengeAnswer, currentChallengeSample: state.currentChallengeSample, submittedCode: state.submittedCode, challenges: state.challenges, currentUser: state.currentUser, currentCode: state.currentCode}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCodeChallenge, storeChallenges, updateCode,
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(CodeChallengeBox);
