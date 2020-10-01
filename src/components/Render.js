import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Render extends Component {
  myFun = () => {
    let container = document.getElementById("myID");
    let element = "My Name is Obydullah Sarder & I am from ReactDOM";
    let callback = () => {
      alert("Done");
    };
    ReactDOM.render(element, container, callback);
  };

  render() {
    return (
      <div>
        <button onClick={this.myFun}>Change</button>
        <h1 id="myID">My Name is Shishir</h1>
      </div>
    );
  }
}
