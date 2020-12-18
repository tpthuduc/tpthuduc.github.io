import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import {loadSavedUser} from '../actions/AuthAction';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    
    return (<Route {...rest} render={props => {
        if(rest.authData && rest.authData)
        rest.dispatch(loadSavedUser());
        return(
            <Component/>
            )} 
        }
        />
    )
}

function mapStateToProps({authReducers}) {
    return  authReducers
}

const mapDispatchToProps = dispatch => ({
    loadSavedUser: () => dispatch(loadSavedUser())
  });

export const PrivateRouteContainer = connect(
    mapStateToProps
)(PrivateRoute)