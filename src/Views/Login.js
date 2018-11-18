import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import LoginC from '../Components/Login.js'
import Header from '../Components/Header.js'

class Login extends Component {
  render () {
    return (
      <div>
        <Header/>
        <h1>Login</h1>
        {
          this.props.user.loaded === true
            ? (this.props.user.displayName !== null
              ? <div>
                <div>logged in : { this.props.user.displayName }</div>
                <div>profile pic : { this.props.user.pictureLink }</div>
                <img alt="profile" src={ this.props.user.pictureLink } />
              </div>
              : <div>
                Login to continue
                <LoginC/>
              </div>
            )
            : null
        }
      </div>
    )
  }
}
export default inject('user')(observer(Login))
