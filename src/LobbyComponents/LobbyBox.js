import React, { Component } from 'react';
import LobbyList from './LobbyList'

class LobbyBox extends Component {

 render() {
   return (
     <div>
      <LobbyList
      url='http://192.168.6.119:3001/api/lobbies'
      pollInterval={2000}
      />
     </div>
   )
 }
}

export default LobbyBox;
