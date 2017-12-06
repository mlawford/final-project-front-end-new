//UserForm.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../src/actions/code-editor.js';
import { bindActionCreators } from 'redux';

class UserForm extends Component {
 constructor(props) {
 super(props);
   this.handleUserChange = this.handleUserChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleUserChange(e) {
   this.props.updateUser(e.target.value)
   console.log(this.props.currentUser)
 }

 handleSubmit(e) {
   e.preventDefault();
 }

 render() {
   return (
     <form onSubmit={ this.handleSubmit }>

       <input
       type='text'
       placeholder='Your name…'
       onChange={ this.handleUserChange } />
     </form>
     )
   }
}

function mapStateToProps(state){
  return {currentUser: state.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUser,
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(UserForm);
