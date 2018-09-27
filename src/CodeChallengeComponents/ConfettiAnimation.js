import React, { Component } from 'react';


export default class Confetti extends Component {

  componentDidMount = () => {
    const Fetti = require('./confetti.js')
    Fetti.confettiFetti()
  }

  componentWillUnmount = () => {
    console.log("HIT")
  }

  render() {
    return (
      <canvas id="confetti" />
    )
  }
}
