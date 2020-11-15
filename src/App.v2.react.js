import * as React from "react";
import "bootstrap";
import "tabler-react/dist/Tabler.css";
import "./App.css";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import rootReducer from "./reducers/rootReducers";
import { TrendingFeeds } from "./containers/TrendingFeedsContainer";
import { HeadlinesFeeds } from "./containers/HeadlinesFeedsContainer";


type Props = {||};
const store = createStore(rootReducer, applyMiddleware(thunk));

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={HeadlinesFeeds} />
            <Route exact path='/headlines' component={HeadlinesFeeds} />
            <Route exact path='/populars' component={TrendingFeeds}/>
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App;