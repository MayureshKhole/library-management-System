import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

// console.log(store.getState());
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
