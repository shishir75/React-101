import React, { Component } from "react";

class Welcome extends Component {
  DoThisFromClass(arg) {
    alert(arg);
  }
  render() {
    return (
      <div>
        <button
          onClick={this.DoThisFromClass.bind(
            this,
            "I am from para from Class Component"
          )}
        >
          Click Me from Class
        </button>
        <h1>
          I am {this.props.name} from Class Component. My age is:
          {this.props.age}
        </h1>
        <p>This is Details from class Component paragram</p>
      </div>
    );
  }
}

export default Welcome;
