import {REQUEST_LOGIN,REQUEST_REGISTER, RECEIVE_LOGIN, RECEIVE_REGISTER} from '../actions/AuthAction'

const initialState = {
    authData: {},
    isSuccess: false,
    isFetching: false,
  }
  
  export default function reducer(state = initialState, action) {
      switch (action.type) {
        case REQUEST_LOGIN:
        case REQUEST_REGISTER:
          return {...state, isFetching: true}
        case RECEIVE_LOGIN:
          return {...state, isFetching: false, authData: action.payload}
        case RECEIVE_REGISTER:
          return {...state, isFetching: false, autData: action.payload}
        default:
          return state;
      }
    }