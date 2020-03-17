import {LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_ERROR, USER_LOGOUT} from '../constants'

const initialState = {
  user:null,
  error:null
}

const auth = (state=initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return action.user
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      return action.error
    case USER_LOGOUT:
      return null
    default:
      return state
  }
}

export default auth