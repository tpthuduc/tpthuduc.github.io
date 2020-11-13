import {HomePage} from "./containers/NewsListContainer";
import Login from './components/Form/login';
import Register from './components/Form/register';

import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducers";

import "bootstrap";
import "tabler-react/dist/Tabler.css";

type Props = {||};
const store = createStore(rootReducer, applyMiddleware(thunk));

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
          </Switch>
          
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App;