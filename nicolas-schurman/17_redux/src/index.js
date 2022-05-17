import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createStore , applyMiddleware } from "redux";
import "./index.css";
import App, { asyncMiddleware } from "./App";
import  {reducer} from './features/todos';
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

// creamos el store con el reducer
const store = createStore(reducer , applyMiddleware(asyncMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
