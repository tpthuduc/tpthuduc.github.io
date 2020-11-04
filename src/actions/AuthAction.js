export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";

export const REQUEST_USER = "REQUEST_USER";

export const userPostFetch = user => {
  return dispatch => {
    return fetch(process.env.REACT_APP_API_URL + "/api/auth/login", {
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
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}


export const userLoginFetch = user => {
  return dispatch => {
    return fetch(process.env.REACT_APP_API_URL + "/api/auth/login", {
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
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}
const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
})