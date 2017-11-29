import React, {Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import { updateCode } from '../src/actions/code-editor.js';
import { updateEvaluatedCode } from '../src/actions/code-editor.js';
import { updatePartnerCode } from '../src/actions/code-editor.js';
import { changeCodeMode } from '../src/actions/code-editor.js';
import { bindActionCreators } from 'redux';
import 'brace/mode/ruby';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/theme/twilight';
import 'brace/theme/cobalt';
import 'brace/theme/gob';
import 'brace/theme/dracula';


class CodeEditor extends Component {
  constructor(){
    super()
    this.ws = new WebSocket('ws://192.168.6.119:8080');
    this.ws.addEventListener('message', (event) => {
      this.props.updatePartnerCode(event.data)
      console.log(event)
      this.codeMode = "javascript"
    })
  }

  componentDidUpdate(prevProps){
    if (this.props.submittedCode !== prevProps.submittedCode){
      this.checkSolution()
    }
  }

  handleChange = (input) => {
    this.props.updateCode(input)
    console.log(this.props)
    this.ws.send(input)
  }

  handleLoad = () => {
    console.log("loaded")
  }

  handleRunCode = () => {
    this.evaluateCode()
  }

  switchCodeMode = (event) => {
    this.props.changeCodeMode(event.target.value)
  }

  showEvaluatedCode = () => {
    this.props.submittedCode
  }

  checkSolution = () => {
    console.log(this.props.submittedCode)
    console.log(this.props.currentChallengeAnswer)
    if (this.props.currentChallengeAnswer === this.props.submittedCode) {
      console.log("PASS")
      alert("Challenge Passed!")
    } else {
      console.log("FAIL")
    }
  }

  evaluateCode = () => {
     try {
        let evaluatedCode = eval(this.props.currentCode)
        this.props.updateEvaluatedCode(evaluatedCode)
      }
      catch(err) {
        let errorMessage = `${err.name}: ${err.message}`
        this.props.updateEvaluatedCode(errorMessage)
      }

    this.showEvaluatedCode()
  }

  render() {

    return (
      <div>
        <div className="code-edit-holder">

          <div className="button-holder">
            <button className="mode-button button2" onClick={this.switchCodeMode} value="monokai"> Monokai </button>
            <button className="mode-button button3" onClick={this.switchCodeMode} value="cobalt"> Cobalt </button>
            <button className="mode-button button4" onClick={this.switchCodeMode} value="dracula"> Dracula</button>
            <button className="mode-button button5" onClick={this.switchCodeMode} value="gob"> Gob (for serial killers)</button>
          </div>

        <input type="submit" className="run-code" value="Run Code" onClick={this.handleRunCode}/>
          <AceEditor
            onChange={this.handleChange}
            onLoad = {this.handleLoad}
            mode="javascript"
            theme={this.props.mode}
            name="editor"
            width="100%"
            height="600px"
            editorProps={{$blockScrolling: true}}
            fontSize={16}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.props.currentCode}
            wrapEnabled={true}
            indentedSoftWrap= {false}
            />

            <div className="output-holder">
              Code Output: {this.props.submittedCode}
            </div>

        </div>

        <div className="partner-code">

        <div className="button-holder2">

        </div>
        <AceEditor
          mode="javascript"
          theme="twilight"
          name="editor"
          width="100%"
          height="650px"
          editorProps={{$blockScrolling: true}}
          fontSize={16}
          readOnly={true}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={false}
          value={this.props.partnerCode}
          wrapEnabled={true}
          indentedSoftWrap= {false}
          />
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {currentCode: state.currentCode, partnerCode: state.partnerCode, submittedCode: state.submittedCode, mode: state.mode, currentChallengeAnswer: state.currentChallengeAnswer, currentChallengeSample: state.currentChallengeSample}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCode, updatePartnerCode, updateEvaluatedCode, changeCodeMode,
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(CodeEditor);
