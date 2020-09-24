import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Switch } from 'react-router-dom';

import AppV2 from "./App.v2.react";
const rootElement = document.getElementById("root");

if(rootElement) {
  ReactDOM.render(<AppV2/>, rootElement);
} else {
  throw new Error("Could not find root element to mount to!");
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
