import React from "react";

function Hello(props) {
  function DoThis(arg) {
    alert(arg);
  }
  return (
    <div>
      <button
        onClick={DoThis.bind(this, "I am from para from Functional Componenet")}
      >
        Click Me
      </button>
      <h1>
        I am {props.name} from functional componenets. My Age is {props.age}
      </h1>
      <p>This is Details Paragraph</p>
    </div>
  );
}

export default Hello;
