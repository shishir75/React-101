import React from "react";
import "./App.css";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Arrow from "./components/Arrow";
import State from "./components/State";

function App() {
  return (
    <div className="App">
      <Hello name="Shishir" age="26"></Hello>

      <Welcome name="Shishir" age="26"></Welcome>

      <Arrow></Arrow>

      <State></State>
    </div>
  );
}

export default App;
