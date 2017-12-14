import React, { Component } from 'react';

class Lobby extends Component {

 render() {
   return (
     <div>
       <button className="mode-button button6" onClick={this.props.clicker} title={this.props.title} id={this.props.id}>
       {this.props.title}
       </button>
     </div>
   )
 }
}
export default Lobby;
