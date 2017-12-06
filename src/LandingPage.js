import React, { Component } from 'react';
import UserForm from './UserForm.js'

class LandingPage extends Component {

  handlClick = () => {
    this.props.history.push("/session")
  }

 render() {
   console.log(this.props)
   return (
      <div>
        <div>
         <div className="logo-image-landing">  </div>
       </div>


       <div className="header-login"> LOGIN </div>
        <div className="header-sign-up"> SIGN UP </div>
       <div className="header-about"> ABOUT </div>
        <div className="header-FAQ"> FAQ </div>


        <div className="landing-text"> A Better Way to Collaborate </div>
        <div className="landing-text2"> For All Programmers </div>
        <div className="landing-text-body"> Print is a place for students, teachers, professonals and hobyists to collaborate on code. </div>
        <div className="landing-demo" onClick={this.handlClick}>Demo</div>

        <div className="input-holder"> <UserForm/> </div>
       <div className="parallax">
        <div className="color-overlay">    </div>
          <div className="landing-main"> </div>
      </div>

    </div>
   )
 }
}
export default LandingPage;
