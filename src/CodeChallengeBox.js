import React, { Component } from 'react';
import axios from 'axios';
import CodeChallenge from './CodeChallenge.js';
import { connect } from 'react-redux';
import { updateCodeChallenge } from '../src/actions/code-editor.js';
import { bindActionCreators } from 'redux';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/theme/twilight';
import 'brace/theme/solarized_light';

class CodeChallengeBox extends Component {
 constructor(props) {
   super(props);
    this.loadChallengesFromServer = this.loadChallengesFromServer.bind(this);
 }

   loadChallengesFromServer() {
     axios.get(this.props.url)
     .then(res => {
       this.props.updateCodeChallenge(res.data[0]);
     })

   }

   componentDidMount() {
     this.loadChallengesFromServer();
     setInterval(this.loadChallengesFromServer, this.props.pollInterval);
   }

  //  parseChallenge = () => {
  //    return (
  //      <div>
  //   <h3>{this.props.currentChallengeTitle}</h3>
  //   <p>{this.props.currentChallengeDescription}</p>
  //   <p>{this.props.currentChallengeContent}</p>
  //     </div>
  //   )
  //  }
  // <h2>CodeChallenge:</h2>
  // {this.props.currentChallengeTitle !== ""?<h4> {this.parseChallenge()} </h4>: null}

 render() {
   return (
     <div>
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
         showGutter={false}
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
  return {currentChallengeTitle: state.currentChallengeTitle, currentChallengeDescription: state.currentChallengeDescription, currentChallengeContent: state.currentChallengeContent, currentChallengeAnswer: state.currentChallengeAnswer, submittedCode: state.submittedCode}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCodeChallenge,
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(CodeChallengeBox);
