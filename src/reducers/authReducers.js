import { REQUEST_LOGIN, REQUEST_REGISTER, RECEIVE_LOGIN, RECEIVE_REGISTER, REQUEST_SAVED_USER, RECEIVE_SAVED_USER, REQUEST_LOGOUT, RECEIVE_LOGOUT } from '../actions/AuthAction'
import { jwtDecode } from '../util/AuthUtil';

const token = localStorage.getItem("token");

let user = jwtDecode(token);

const initialState = {
  authData:   user && user.name && user.email && user.username ?{user } : undefined,
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
      return state;
    case RECEIVE_LOGOUT:
      state.authData = null
      state.isSuccess = false
      return state;
    case REQUEST_LOGOUT:
      state.authData = null
      state.isSuccess = false
      return state;
    default:
      return state;
  }
}