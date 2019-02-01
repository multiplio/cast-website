import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

import TwitterButton from '../Components/Twitter'
import Header from '../Components/Header'
import Cookie from '../Components/CookieNotice'

class Login extends Component {
  constructor (props) {
    super(props)

    this.loginWithTwitter = this.loginWithTwitter.bind(this)
  }

  componentDidMount () {
    document.title = 'QuackUp - login'
  }

  loginWithTwitter () {
    window.location.href = process.env.REACT_APP_TWITTER_LOGIN_PATH
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
      <TwitterButton onClick={ this.loginWithTwitter }>
        Login with Twitter
      </TwitterButton>
    </div>

    return (
      <div className={css(styles.container)}>
        <Header/>

        <div className={css(styles.view)}>
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
  container: {
    height: '100%',
    backgroundColor: pallete.blue,
  },
  view: {
    margin: 0,
    display: 'flex',
    'align-items': 'center',
    'align-content': 'center',
    'justify-content': 'space-between',
    'flex-direction': 'column',
    'text-align': 'center',
  },
})

