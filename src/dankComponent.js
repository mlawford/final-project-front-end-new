import React, { Component } from 'react';

export default class Dank extends Component {

  componentDidMount = () => {
    require('./dank.js')
  }

  render() {
    return (
      <canvas id="confetti" />
    )
  }
}
