import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class findDOMNode extends Component {
  changeImage = () => {
    let container = document.getElementById("myIMG");
    ReactDOM.findDOMNode(container).src = "react2.png";
  };

  render() {
    return (
      <div>
        <button onClick={this.changeImage}>Change Image</button>
        <br></br>
        <img src="react1.png" alt="Name" id="myIMG"></img>
      </div>
    );
  }
}
