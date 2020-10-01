import React from "react";
import "./App.css";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Arrow from "./components/Arrow";
import State from "./components/State";
import SetState from "./components/SetState";
import Bootstrap from "./components/Bootstrap";
import Condition1 from "./components/Condition1";

function App() {
  return (
    <div className="App">
      <Hello name="Shishir" age="26"></Hello>

      <Welcome name="Shishir" age="26"></Welcome>

      <Arrow></Arrow>

      <State></State>

      <SetState></SetState>

      <Bootstrap></Bootstrap>

      <Condition1></Condition1>
    </div>
  );
}

export default App;
