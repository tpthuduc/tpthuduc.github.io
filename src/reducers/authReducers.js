import { REQUEST_LOGIN, REQUEST_REGISTER, RECEIVE_LOGIN, RECEIVE_REGISTER, REQUEST_SAVED_USER, RECEIVE_SAVED_USER } from '../actions/AuthAction'
import jwt_decode from 'jwt-decode'

const token = localStorage.getItem("token");

let user = token ? jwt_decode(token): undefined;

const initialState = {
  authData: { user: user && user.name && user.email && user.username ? user : undefined },
  isSuccess: true,
  isFetching: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
    case REQUEST_REGISTER:
      return { ...state, isFetching: true }
    case RECEIVE_LOGIN:
      return { ...state, isFetching: false, authData: action.payload }
    case RECEIVE_REGISTER:
      return { ...state, isFetching: false, authData: action.payload }
    case RECEIVE_SAVED_USER:
      const authData = action.payload ? { user: action.payload } : state.authData;
      return { ...state, isFetching: false, authData: authData }
    case REQUEST_SAVED_USER:
    default:
      return state;
  }
}