import { connect } from "react-redux";
import RegisterPage from "../pages/RegisterPage";


function mapStateToProps({authReducers}) {
    return authReducers;
}

const RegisterContainer = connect(
    mapStateToProps
)(RegisterPage)

export default  RegisterContainer


