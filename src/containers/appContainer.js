import React, { Component } from 'react'
import { connect } from 'react-redux'

class _AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app-container'> 
        app container
      </div>
    )
  }
}


export const AppContainer = connect(state => state)(_AppContainer)