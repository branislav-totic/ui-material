import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import { GlobalStyle } from "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
