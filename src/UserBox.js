import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import axios from 'axios';

class UserBox extends Component {
 constructor(props) {
   super(props);
   this.state = {
      data: []
    };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
 }

   loadCommentsFromServer() {
     axios.get(this.props.url)
     .then(res => {
       this.setState({ data: res.data });
     })
   }

   handleUserSubmit(user) {
     let users = this.state.data;
     user.id = Date.now();
     let newUsers = users.concat([user]);
     this.setState({ data: newUsers });
     axios.post(this.props.url, user)
       .catch(err => {
       console.error(err);
       this.setState({ data: users });
   });
  }


   componentDidMount() {
     this.loadCommentsFromServer();
     setInterval(this.loadCommentsFromServer, this.props.pollInterval);
   }

 render() {
   return (
     <div>
       <h2>Users:</h2>
       <UserList data={ this.state.data }/>
       <UserForm onUserSubmit={this.handleUserSubmit} />
     </div>
   )
 }
}

export default UserBox;
