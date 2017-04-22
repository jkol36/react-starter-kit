import React from 'react'
import { Route } from 'react-router'
import { AuthContainer } from 'containers'
import { LoginComponent, SignupComponent } from 'components'

console.log(LoginComponent)
export default () => [(
   <Route path="/" component={AuthContainer} key='auth-container'>
      <Route path="login" component={LoginComponent}/>
      <Route path="signup" component={SignupComponent}/>
  </Route>
)]