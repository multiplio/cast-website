import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

import LoginC from '../Components/Login'
import Header from '../Components/Header'
import Cookie from '../Components/CookieNotice'

class Login extends Component {
  componentDidMount () {
    document.title = 'QuackUp - login'
  }
  render () {
    const loggedIn =
    <div>
      <div>logged in : { this.props.user.displayName }</div>
      <div>profile pic : { this.props.user.pictureLink }</div>
      <img alt="profile" src={ this.props.user.pictureLink } />
    </div>

    const loggedOut =
    <div>
      Login to continue
      <LoginC/>
    </div>

    return (
      <div className={css(styles.view)}>
        <Header/>

        <div className={css(styles.container)}>
          <h1>Login</h1>

          {
            this.props.user.loaded === true
              ? (this.props.user.displayName !== null
                ? loggedIn
                : loggedOut
              )
              : null
          }
        </div>

        <Cookie />
      </div>
    )
  }
}
Login.propTypes = {
  user: PropTypes.object,
}
export default inject('user')(observer(Login))

const styles = StyleSheet.create({
  view: {
    height: '100%',
    backgroundColor: pallete.blue,
  },
  container: {
    margin: 0,
    display: 'flex',
    'align-items': 'center',
    'align-content': 'center',
    'justify-content': 'space-between',
    'flex-direction': 'column',
    'text-align': 'center',
  },
})

