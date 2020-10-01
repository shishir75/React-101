import React, { Component } from "react";

class VariableElememt extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };
  }

  render() {
    return this.state.loggedIn ? (
      <h1>I am LoogedIn</h1>
    ) : (
      <h1>I am not loggedIn</h1>
    );
  }
}

export default VariableElememt;
