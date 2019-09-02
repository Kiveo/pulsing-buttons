import React from "react";
import ReactDOM from "react-dom";
import HoverMe from "./HoverMe";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Pulsing Hover</h1>
      <HoverMe />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
