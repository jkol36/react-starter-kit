import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logUserOut} from 'actions';
import { TopBar } from 'components';


class _AppContainer extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    console.log(this.props)
    const { dispatch } = this.props
    console.log(' should log user out', this.props.auth.user)
    dispatch(logUserOut(this.props.auth.user))
  }
  render() {
    const products = [{
      productId:'test',
      name:'test',
      price:30
    }]
    return (
      <div className='app-container'>
        <TopBar logout={this.logout} />
      </div>
    )
  }
}


export const AppContainer = connect(state => state)(_AppContainer)