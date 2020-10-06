import React, { Component } from "react";

export default class Clock extends Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <h1>The time is {this.state.date.toLocaleTimeString()}</h1>;
  }
}
