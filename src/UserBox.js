import React, { Component } from ‘react’;
import UserList from ‘./UserList’;
import UserForm from ‘./UserForm’;
import DATA from ‘../data’;

class UserBox extends Component {
 constructor(props) {
   super(props);
   this.state = {
      data: []
    };
 }

 render() {
   return (
     <div style={ style.userBox }>
       <h2>Users:</h2>
       <UserList data={ DATA }/>
       <UserForm />
     </div>
   )
 }
}

export default UserBox;
