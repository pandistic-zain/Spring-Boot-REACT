import React from "react";
import "./App.css";
import States from "./States.jsx";
import Props from "./Props.jsx";
import HooksUE from "./HooksUE.jsx";
import HookUM from "./HookUM.jsx";
export default function Home() {
  return (
    <>
      <header className="App-header">
        <h1>Hello World</h1>
        <p>Pendi a fer thak Champion!</p>
        <States />
        <Props name={"React"} />
        <HooksUE data={"ZAIN"} count={0} />
        <HookUM />
      </header>
    </>
  );
}
