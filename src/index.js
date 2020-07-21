import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StartProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StartProvider
      initialState={initialState}
      reducer={reducer}
    >
      <App />
    </StartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
