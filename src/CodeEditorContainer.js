import React, {Component} from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { connect } from 'react-redux';
import { updateCode } from '../src/actions/code-editor.js';
import { updateEvaluatedCode } from '../src/actions/code-editor.js';
import { updatePartnerCode } from '../src/actions/code-editor.js';
import { bindActionCreators } from 'redux';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import 'brace/theme/twilight';


class CodeEditor extends Component {
  constructor(){
    super()
      this.ws = new WebSocket('ws://localhost:8080');
      this.ws.addEventListener('message', (event) => {
        this.props.updatePartnerCode(event.data)
      console.log(event)
    })

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

  evaluateCode = () => {

     try {
        let evaluatedCode = eval(this.props.currentCode)
        this.props.updateEvaluatedCode(evaluatedCode)
      }
      catch(err) {
        let errorMessage = `${err.name}: ${err.message}`
        this.props.updateEvaluatedCode(errorMessage)
      }

    console.log(this.props.submittedCode)
    this.showEvaluatedCode()
  }

  showEvaluatedCode = () => {
    this.props.submittedCode
  }

  render() {

    return (
      <div>
        <div className="code-edit-holder">
        <input type="submit" className="run-code" value="Run Code" onClick={this.handleRunCode}/>
          <AceEditor
            onChange={this.handleChange}
            onLoad = {this.handleLoad}
            mode="javascript"
            theme="monokai"
            name="editor"
            width="100%"
            height="800px"
            editorProps={{$blockScrolling: true}}
            fontSize={16}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.props.currentCode}
            />
            <div className="output-holder">
              Code Output: {this.props.submittedCode}
            </div>
        </div>

        <div className="partner-code">
        <AceEditor
          mode="javascript"
          theme="twilight"
          name="editor"
          width="100%"
          height="921px"
          editorProps={{$blockScrolling: true}}
          fontSize={16}
          readOnly={true}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={false}
          value={this.props.partnerCode}
          />
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {currentCode: state.currentCode, partnerCode: state.partnerCode, submittedCode: state.submittedCode}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateCode, updatePartnerCode, updateEvaluatedCode,
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(CodeEditor);
