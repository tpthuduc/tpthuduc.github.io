import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const RECEIVE_LOGIN = "RECEIVE_LOGIN";
export const RECEIVE_REGISTER = "RECEIVE_REGISTER";

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_REGISTER = "REQUEST_REGISTER";

export const REQUEST_SAVED_USER = "REQUEST_SAVED_USER";
export const RECEIVE_SAVED_USER = "RECEIVE_SAVED_USER";

export const postUserLogin = user => {
  return dispatch => {
    dispatch(requestLogin())
    return axios.post(process.env.REACT_APP_BASE_URL + "/auth/login", { email: user.email, password: user.password })
      .then(res => {
        let data = res.data
        if (!data) return;
        if (data.message) {
          console.log(data.message);
        } else {
          localStorage.setItem("token", data.token.split(" ")[1])
          dispatch(receiveLogin(data))
        }
      })
      .catch(err => {
        console.log(err);
        if (err && err.response && err.response.data) {
          dispatch(receiveLogin(err.response.data))
        } else {
          dispatch(receiveLogin({ message: err.message }))
        }
      })
  }
}

export const postUserRegister = user => {
  return dispatch => {
    dispatch(requestRegister())
    var user = {
      username: user.username,
      password: user.password,
      email: user.email,
      name: user.name
    }
    return axios.post(process.env.REACT_APP_BASE_URL + "/auth/register", user)
      .then(res => {
        let data = res.data
        if (!data) return;
        if (data.message) {
          console.log(data.message);
        } else {
          localStorage.setItem("token", data.token.split(" ")[1])
          dispatch(receiveRegister(data))
        }
      })
      .catch(err => {
        console.log(err);
        if (err && err.response && err.response.data) {
          dispatch(receiveRegister(err.response.data))
        } else {
          dispatch(receiveRegister({ message: err.message }))
        }
      })
  }
}

export const loadSavedUser = () => {
  return dispatch => {

    dispatch(requestSavedUser())
    const token = localStorage.getItem("token");

    var user = jwt_decode(token || '');
    dispatch(receiveSavedUser(user))

  }
}

const requestLogin = () => ({
  type: REQUEST_LOGIN
})

const requestRegister = () => ({
  type: RECEIVE_REGISTER
})

const receiveLogin = userObj => ({
  type: RECEIVE_LOGIN,
  payload: userObj
})

const receiveRegister = userObj => ({
  type: RECEIVE_LOGIN,
  payload: userObj
})

const requestSavedUser = () => ({
  type: REQUEST_SAVED_USER
})

const receiveSavedUser = userObj => ({
  type: RECEIVE_SAVED_USER,
  payload: userObj
})