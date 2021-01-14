import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { hydrate, render } from "react-dom";
import "normalize.css";
import "global-styles.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
