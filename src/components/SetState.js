import React, { Component } from "react";

class SetState extends Component {
  constructor() {
    super();
    this.state = {
      name: "Shishir",
    };
  }

  ChangeName = (e) => {
    this.setState({ name: e });
  };

  render() {
    return (
      <div>
        <h1>My Name is: {this.state.name}</h1>
        <button onClick={this.ChangeName.bind(this, "Obydullah Sarder")}>
          Change Name
        </button>
      </div>
    );
  }
}

export default SetState;
