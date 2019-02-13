import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

import Container from '../Components/Container'

import TwitterButton from '../Components/Twitter'

class Login extends Component {
  constructor (props) {
    super(props)

    this.loginWithTwitter = this.loginWithTwitter.bind(this)
  }

  componentDidMount () {
    document.title = 'Cast - login'
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
      <TwitterButton onClick={ this.loginWithTwitter }>
        Login with Twitter
      </TwitterButton>
    </div>

    return (
      <Container>
        <div className={css(styles.container)}>
          <div className={css(styles.view)}>
            <h1 className={css(styles.header)}>Login</h1>
            {
              this.props.user.loaded === true
                ? (this.props.user.displayName !== null
                  ? loggedIn
                  : loggedOut
                )
                : null
            }
          </div>
        </div>
      </Container>
    )
  }
}
Login.propTypes = {
  user: PropTypes.object,
}
export default inject('user')(observer(Login))

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    'flex-grow': '1',
    backgroundColor: pallete.white,
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
  },
  view: {
    height: '100%',
    width: '100%',
    margin: 0,
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'align-content': 'center',
    'justify-content': 'space-around',
    'text-align': 'center',
  },
  header: {
    margin: '0 0 1rem 0',
  },
})

