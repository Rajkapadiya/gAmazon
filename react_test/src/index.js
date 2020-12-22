import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Redux //
import store from './Store'
import { Provider } from "react-redux";
// Redux //

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

