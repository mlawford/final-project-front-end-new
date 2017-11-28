//UserForm.js
import React, { Component } from 'react';
class UserForm extends Component {
 constructor(props) {
 super(props);
   this.state = { name: ''};
   this.handleUserChange = this.handleUserChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleUserChange(e) {
   this.setState({ name: e.target.value });
 }

 handleSubmit(e) {
   e.preventDefault();
   console.log(`${this.state.name}`)
   
  this.props.onUserSubmit({ name: this.state.name});
  this.setState({ name:''});
   //we will be tying this into the POST method in a bit
 }

 render() {
   return (
     <form onSubmit={ this.handleSubmit }>

       <input
       type='text'
       placeholder='Your name…'
       value={ this.state.name }
       onChange={ this.handleUserChange } />

       <input
       type='submit'
       value='Post' />
     </form>
     )
   }
}
export default UserForm;
