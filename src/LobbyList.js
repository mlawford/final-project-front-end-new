import React, { Component } from 'react';
import Lobby from './Lobby';
import { connect } from 'react-redux';
import { addSocketToLobby } from '../src/actions/code-editor.js';
import { getLobbies } from '../src/actions/code-editor.js';
import { bindActionCreators } from 'redux';
import axios from 'axios';


class LobbyList extends Component {
  constructor(props){
    super(props);
    this.loadLobbies = this.loadLobbies.bind(this);
  }

  loadLobbies() {
    axios.get(this.props.url)
    .then(res => {
      res.data.forEach(lobby => {

        this.props.getLobbies(lobby)
      })
    })
  }

  componentDidMount() {
    this.loadLobbies();
  }

  handleClick = (event) => {
    console.log(this.props.lobbies)
      this.props.addSocketToLobby(this.ws, event.target.title)
      console.log(this.props.lobbies)
      console.log(event.target.id)
  }

  handleCommentUpdate(id, socket) {
   //sends the comment id and new author/text to our api
   axios.put(`${this.props.url}/${id}`, socket)
     .catch(err => {
     console.log(err);
 })
 }


 render() {
 let lobbyNodes = this.props.lobbies.map((lobby, idx) => {
   return (
     <Lobby title={ lobby.title } key={ idx } id={lobby.id} clicker={this.handleClick}>
     </Lobby>
     )
   })
   return (
     <div>
        {lobbyNodes}
     </div>
   )
 }
}

function mapStateToProps(state){
  return {lobbies: state.lobbies}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addSocketToLobby, getLobbies
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(LobbyList);
