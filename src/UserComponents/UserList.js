
import React, { Component } from 'react';
import User from './User';


class UserList extends Component {
 render() {
 let userNodes = this.props.data.map((user, idx) => {
   return (
     <User name={ user.name } key={ idx }>
     </User>
     )
   })
   return (
     <div>
       { userNodes }
     </div>
   )
 }
}
export default UserList;
