import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"
import "./utlility.css"
import history from "./redux/history"

ReactDOM.render(
    <Router history={history}>
        <BrowserRouter >
            <Provider store={store} >
                <App />
            </Provider >
        </BrowserRouter >
    </Router>,

    document.getElementById("root")
);


reportWebVitals();