import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import { observer, inject } from 'mobx-react'

import { Link } from 'react-router-dom'

import pallete from '../Styles/pallete'

const ProfileButton = ({ user, inheritStyles }) => {
  const loggedOut =
    <Link to="/login" className={css(styles.login)}>
      Log in
    </Link>

  const loggedIn =
    <Link to="/me">
      <img
        alt="profile"
        className={css(styles.image)}
        src={ user.pictureLink }
      />
    </Link>

  return (
    <div>
      {
        user.loaded !== true ? null :
          <div className={css(inheritStyles, styles.container)}>
            {
              user.displayName !== null ? loggedIn : loggedOut
            }
          </div>
      }
    </div>
  )
}
ProfileButton.propTypes = {
  user: PropTypes.object,
  inheritStyles: PropTypes.object,
}
export default inject('user')(observer(ProfileButton))

const styles = StyleSheet.create({
  container: {
    display: 'inline',
    'text-decoration': 'none',
  },
  image: {
    width: '56px',
    height: '56px',
    'border-radius': '50%',
    'margin-right': '0.5rem',
  },
  login: {
    color: 'black',
    'padding': '1rem',
    backgroundColor: pallete.white,
    'border-radius': '10px',
    'text-decoration': 'none',
  },
})

