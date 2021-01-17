
import * as React from "react";
import "bootstrap";
import "tabler-react/dist/Tabler.css";
import "./App.css";
import "./Placeholder.css";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import rootReducer from "./reducers/rootReducers";

import ViewDetailRedirect from "./components/ViewDetailRedirect";
import NotFound from './pages/NotFound'
import { HeaderFooterWrapperContainer } from "pages/HeaderFooterWrapperPage";
import { LoginContainer } from "pages/LoginPage";
import { RegisterContainer } from "pages/RegisterPage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

function App(props) {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/register' component={RegisterContainer} />
            <Route exact path="/detail/:id" component={ViewDetailRedirect} />
            <Route path='/' component={HeaderFooterWrapperContainer} />

            <Route component={NotFound} />
          </Switch>

        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App;