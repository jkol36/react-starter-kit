import {
  LOGIN_ENDPOINT, 
  SIGNUP_ENDPOINT
} from '../config'
import agent from 'superagent-bluebird-promise'

export const loginRequest = user => {
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

export const signupRequest = user => {
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