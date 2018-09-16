import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "mobx-react";
import { store } from "./store/book-store";
import DevTools from "mobx-react-devtools";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
