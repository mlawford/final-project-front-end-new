
import React, { Component } from ‘react’;
import User from ‘./User’;


class UserList extends Component {
 render() {
 let userNodes = this.props.data.map(user => {
   return (
     <User name={ user.name } key={ user.id }>
     </User>
     )
   })
   return (
     <div style={ style.userList }>
       { userNodes }
     </div>
 )
 }
}
export default UserList;
