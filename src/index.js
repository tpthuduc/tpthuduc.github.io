import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, Router, Switch } from 'react-router-dom';

import App from "./App.react";
const rootElement = document.getElementById("root");

if(rootElement) {
  ReactDOM.render(<App/>, rootElement);
} else {
  throw new Error("Could not find root element to mount to!");
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
