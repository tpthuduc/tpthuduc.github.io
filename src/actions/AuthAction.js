import axios from 'axios';
import { string } from 'prop-types';


export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export const REQUEST_USER = "REQUEST_USER";

export const userPostFetch = user => {
  return dispatch => {
    return fetch(process.env.REACT_APP_BASE_URL + "/api/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log(data.message);
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}


export const userLoginFetch = user => {
  return dispatch => {
    return axios.post(process.env.REACT_APP_BASE_URL + "/api/auth/login",{email: user.email,password: user.password})
    .then(res=>{
        let data = res.data
        if(!data) return;
        if (data.message) {
          console.log(data.message);
        } else {
          localStorage.setItem("token", data.token.split(" ")[1])
          dispatch(loginUser(data.user))
        }
    })
    .catch(err=>{
      dispatch(l)
    })
}
}

const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
})