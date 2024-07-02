import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore } from "redux";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Provider } from "react-redux"
import { Map } from "immutable";

const store = createStore(uiReducer, Map(initialState));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
