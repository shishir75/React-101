import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      name: "Shishir",
      age: "24",
      weight: {
        class7: "40",
        class8: "42",
        class9: "44",
        class10: "46",
      },
      color: ["Gray", "Green", "Light Pink", "Light Blue"],
    };
  }

  render() {
    return (
      <div>
        <h2>
          I am {this.state.name} & my age is {this.state.age} from State
        </h2>
        <h3>My weight is {this.state.weight.class10}</h3>
        <h3>My favorite Color is {this.state.color[3]}</h3>
      </div>
    );
  }
}

export default State;
