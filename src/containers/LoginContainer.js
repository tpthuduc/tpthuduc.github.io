import React from "react";

import { connect } from "react-redux";

import { postUserLogin } from '../actions/AuthAction';
import Login from "../pages/LoginPage";

function mapStateToProps({authReducers}) {
    return authReducers;
}

const mapDispatchToProps = dispatch => ({
    postUserLogin: userInfo => dispatch(postUserLogin(userInfo))
  });
  
const LoginContainer = connect(
    mapStateToProps
)(Login)
export default LoginContainer