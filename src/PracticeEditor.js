import React, {Component} from 'react';
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



class PracticeEditor extends Component {
  constructor(props){
    super(props)

    this.defaultEditor = `//User: ${this.props.currentUser} \n //Start coding here! \n`
  }

  componentDidUpdate(prevProps){
    if (this.props.submittedCode !== prevProps.submittedCode){
      this.checkSolution()
    }
  }

  handleChange = (input) => {
    this.props.updateCode(input)
  }

  handleLoad = () => {

  }

  handleRunCode = () => {
    this.evaluateCode()
  }

  switchCodeMode = (event) => {
    this.props.changeCodeMode(event.target.value)
    this.props.updateCode(this.props.currentCode)
  }

  showEvaluatedCode = () => {
    this.props.submittedCode
  }

  checkSolution = () => {
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
        this.props.updateEvaluatedCode(evaluatedCode.toString())
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
            <button className="mode-button button5" onClick={this.switchCodeMode} value="gob"> Gob </button>
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
            defaultValue={this.defaultEditor}
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
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {currentCode: state.currentCode, partnerCode: state.partnerCode, submittedCode: state.submittedCode, mode: state.mode, currentChallengeAnswer: state.currentChallengeAnswer, currentChallengeSample: state.currentChallengeSample, currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCode, updatePartnerCode, updateEvaluatedCode, changeCodeMode,
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(PracticeEditor);
