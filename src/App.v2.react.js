import {HomePage} from "./containers/NewsListContainer";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import DashboardPage from "./components/page/Dashboard.page";

import Login from './components/Form/login';
import Register from './components/Form/register';

import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducers";

import "bootstrap";
import "tabler-react/dist/Tabler.css";

type Props = {||};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

function App(props: Props): React.Node {
  
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/register' component={RegisterContainer} />
            <Route exact path="/dashboard">
              <DashboardPage/>
            </Route>
            
          </Switch>
          
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App;