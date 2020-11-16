import React from "react";

import { connect } from "react-redux";

import { userLoginFetch } from '../actions/AuthAction';
import Login from "../components/page/Login.page";


function mapStateToProps({newsReducers}) {
    return {
        userInfo: newsReducers.userInfo,
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
  })
  


export const LoginPage = connect(
    mapDispatchToProps
)(Login)