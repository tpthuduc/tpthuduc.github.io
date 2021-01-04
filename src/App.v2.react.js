import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";

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
import ViewDetailRedirect from "./components/ViewDetailRedirect";
import NotFound from './pages/NotFound'
import DashboardPage from "./pages/DashboardPage";
import GoogleMap from "./pages/Map";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

function App(props) {
  
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
            <Route exact path='/map' component={GoogleMap} />
            <Route exact path={["/management/dashboard",'/management']} component={DashboardPage}>
            </Route>
            <Route exact path="/detail/:id" component={ViewDetailRedirect} />
            <Route component={NotFound} />
          </Switch>
          
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App;