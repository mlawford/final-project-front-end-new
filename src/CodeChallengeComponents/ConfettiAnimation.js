import React, { Component } from 'react';


export default class Confetti extends Component {

  componentDidMount = () => {
    const Fetti = require('./dank.js')
    Fetti.dankFetti()
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
