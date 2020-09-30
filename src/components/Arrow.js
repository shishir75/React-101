import React from "react";

const AlertMe = (e) => {
  alert(e);
};

const Arrow = () => {
  return (
    <div>
      <p>This is for Arrow Function</p>
      <button onClick={AlertMe.bind(this, "This is from Arrow function")}>
        Arrow Function Button
      </button>
    </div>
  );
};

export default Arrow;
