import React from "react";

import { connect } from "react-redux";
import RegisterPage from "../components/page/Register.page";


function mapStateToProps({authReducers}) {
    return {
        userInfo: authReducers.userInfo,
    }
}

const RegisterContainer = connect(
    mapStateToProps
)(RegisterPage)

export default  RegisterContainer


