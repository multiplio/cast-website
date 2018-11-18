import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import { observer, inject } from 'mobx-react'

import { Link } from 'react-router-dom'

import pallete from '../Styles/pallete'

class ProfileButton extends Component {
  render () {
    return (
      <div>
        { this.props.user.loaded === true
          ?
          this.props.user.displayName !== null
            ?
            <div className={css(this.props.styles, styles.container)}>
              <Link to="/me">
                <img alt="profile" src={ this.props.user.pictureLink } />
              </Link>
            </div>
            :
            <div className={css(this.props.styles, styles.container)}>
              <Link to="/login">Log in</Link>
            </div>
          :
          null
        }
      </div>
    )
  }
}
ProfileButton.propTypes = {
  user: PropTypes.object,
  styles: PropTypes.object,
}
export default inject('user')(observer(ProfileButton))

const styles = StyleSheet.create({
  container:
  {
    border: ('2px solid ' + pallete.blue),
    display: 'inline',
  },
})

