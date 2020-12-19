import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import DashboardPage from "./components/page/Dashboard.page";

import * as React from "react";
import "bootstrap";
import "tabler-react/dist/Tabler.css";
import "./App.css";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware,compose } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import rootReducer from "./reducers/rootReducers";
import { TrendingFeeds } from "./containers/TrendingFeedsContainer";
import { HeadlinesFeeds } from "./containers/HeadlinesFeedsContainer";


type Props = {||};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

function App(props: Props): React.Node {
  
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={HeadlinesFeeds} />
            <Route exact path='/headlines' component={HeadlinesFeeds} />
            <Route exact path='/trendings' component={TrendingFeeds}/>
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/register' component={RegisterContainer} />
            <Route exact path="/dashboard"><DashboardPage/></Route>
          </Switch>
          
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App;