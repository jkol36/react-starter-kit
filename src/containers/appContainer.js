import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from 'actions'
import { TopBar } from 'components'
import BootstrapTable from 'react-bootstrap-table2'

class _AppContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const products = [{
      productId:'test',
      name:'test',
      price:30
    }]
    return (
      <div className='app-container'> 
         <BootstrapTable data={ products } striped hover condensed>
            <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}


export const AppContainer = connect(state => state)(_AppContainer)