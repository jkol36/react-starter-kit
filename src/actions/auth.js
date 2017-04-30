import {
  LOGIN_ENDPOINT, 
  SIGNUP_ENDPOINT
} from '../config'
import { LOGIN_ERROR, LOGIN_SUCCESS } from 'constants'
import agent from 'superagent-bluebird-promise'
import { push } from 'react-router-redux'

const loginError = error => dispatch => {
  dispatch({
    type: LOGIN_ERROR,
    error
  })
}

const loginSuccess = user => dispatch => {
  dispatch({
    type: LOGIN_SUCCESS,
    user
  })
  return dispatch(push('/app'))
}
export const loginRequest = user => dispatch => {
  console.log('login request', user)
  if(!user) {
    dispatch(loginError('no user submitted'))
  }
  return agent
          .post(LOGIN_ENDPOINT)
          .send(user)
          .then(res => {
            dispatch(loginSuccess(res.body))
          })
          .catch(err => dispatch(loginError(err)))
}

export const signupRequest = user => dispatch => {
  if(!user) {
    dispatch(loginError('no user submitted'))
  }
  return agent
          .post(SIGNUP_ENDPOINT)
          .send(user)
          .then(res => {
            dispatch(signupSuccess(res.body))
          })
          .catch(err => dispatch(signupError(err)))
}