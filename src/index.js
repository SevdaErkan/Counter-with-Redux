import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import reducer from "./reducer";
import App from "./App";
import { createStore } from "redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
