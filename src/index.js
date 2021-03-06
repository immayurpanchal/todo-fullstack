import React from "react";
import ReactDOM from "react-dom";
import { YoloProvider } from "react-googleyolo";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./components/util/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <YoloProvider
    clientId={process.env.REACT_APP_GID}
    onRetrieveSuccess={console.log}
    onRetrieveFailure={console.log}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </YoloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
