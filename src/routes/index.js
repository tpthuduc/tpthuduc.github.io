import React from "react";
import Login from '../components/Form/login'
import Register from '../components/Form/register'
import Home from '../components/Home';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

export default function Routes() {
    return (
        <Router>
            <Switch>
                {/* <Route path="/about">
            <About />
        </Route> */}
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <div className="App">
                        <Home />
                    </div>
                </Route>
            </Switch>
        </Router>)
}