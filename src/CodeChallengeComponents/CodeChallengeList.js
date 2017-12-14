import React, { Component } from 'react';
import CodeChallenge from './CodeChallenge';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import CodeChallenge from './CodeChallenge.js'


class CodeChallengeList extends Component {
  constructor(props){
    super(props);
  }


  handleClick = (event) => {

  }

 render() {
 let challengeNodes = this.props.challenges.map((challenge, idx) => {
   return (
     <CodeChallenge content={ challenge.content } key={ idx } id={challenge.id} clicker={this.handleClick}>
     </CodeChallenge>
     )
   })
   return (
     <div>
        {challengeNodes}
     </div>
   )
 }
}

function mapStateToProps(state){
  return {challenges: state.challenges}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addSocketToCodeChallenge, getLobbies
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(CodeChallengeList);
