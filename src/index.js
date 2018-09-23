import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "mobx-react";
import { store } from "./store/book-store";
import DevTools from "mobx-react-devtools";

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    {process.env.NODE_ENV !== "production" && (
      <DevTools position={{ bottom: 0, right: 10 }} />
    )}
  </div>,
  document.getElementById("root")
);
