import {LOGIN_USER,REGISTER_USER} from '../actions/AuthAction'

const initialState = {
    currentUser: {}
  }
  
  export default function reducer(state = initialState, action) {
      switch (action.type) {
        case LOGIN_USER:
          return {...state, currentUser: action.payload}
        case REGISTER_USER:
          return {...state, currentUser: action.payload}
        default:
          return state;
      }
    }