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

class PracticeProblems extends Component {
 constructor(props) {
   super(props);
    this.loadChallengesFromServer = this.loadChallengesFromServer.bind(this);
    this.defaultEditor = `//User: ${this.props.currentUser} \n //Start coding here!`
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
       <div className="code-challenge">
       {this.props.challenges.map((challenge, idx) => {
         return (
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
             value={challenge.content}
             wrapEnabled={true}
             indentedSoftWrap= {false}
             />
           )
         })}
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

export default connect(mapStateToProps,mapDispatchToProps)(PracticeProblems);
