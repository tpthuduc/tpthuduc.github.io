import React from "react";

import { connect } from "react-redux";
import RegisterPage from "../components/page/Register.page";


function mapStateToProps({authReducers}) {
    return authReducers;
}

const RegisterContainer = connect(
    mapStateToProps
)(RegisterPage)

export default  RegisterContainer


