import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import * as C from '../constants'

class _AuthContainer extends Component {
  constructor(props) {
    super(props)
    this.checkAuth = this.checkAuth.bind(this)
  }

  checkAuth() {
    console.log('checking auth')
    const {auth:{ user }, location:{ pathname }, dispatch} = this.props
    if(!user && pathname !== 'login' || !user && pathname !== 'signup') {
      console.log('user not logged in')
      dispatch(push('/login'))
    }
  }

  componentWillMount() {
    this.checkAuth()
  }
  render() {
    console.log(this.props)
    return (
      React.cloneElement(this.props.children)
    )
  }
}

export const AuthContainer = connect(state => state)(_AuthContainer)