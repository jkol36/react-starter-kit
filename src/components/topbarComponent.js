import React from 'react'
import { Link } from 'react-router'

export const TopBar = props => {
  return (
    <div className='row header'> 
      <div className='content'> 
        <div className='col-xs-12 value hidden-xs'> 
          <button onClick={props.logout}> Logout </button>
        </div>
      </div>
    </div>
  )
}