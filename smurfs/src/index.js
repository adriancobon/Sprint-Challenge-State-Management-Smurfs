// Standard imports
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// Redux imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// Custom imports
import { reducer } from './reducers/smurfReducer';

// ReactDOM.render(<App />, document.getElementById("root"));

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
