import rootReducer from "../reducers/rootReducers";
import thunk from "redux-thunk";

import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import { reduxReactRouter } from "redux-router";

export default function configureStore(initialState, debug = false) {
    let createStoreWithMiddleware;

    const middleware = applyMiddleware(thunk);
    createStoreWithMiddleware = compose(
        middleware,
        reduxReactRouter({routes})
    )
}