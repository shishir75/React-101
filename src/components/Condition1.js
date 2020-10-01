import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Conditon1 extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };
  }

  render() {
    if (this.state.loggedIn === true) {
      return (
        <div>
          <h1>This is from Condition 1</h1>
          <button className="btn btn-danger">Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>This is from Condition 1</h1>
          <button className="btn btn-primary">Login</button>
        </div>
      );
    }
  }
}

export default Conditon1;
