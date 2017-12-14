import React, { Component } from 'react';

class CodeChallenge extends Component {

 render() {
   return (
   <div>
     <button className="mode-button button6" onClick={this.props.clicker} title={this.props.title} id={this.props.id}>
     </button>
   </div>
   )
 }
}
export default CodeChallenge;
