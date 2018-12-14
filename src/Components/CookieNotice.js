import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import { observer, inject } from 'mobx-react'

import webpage from '../States/Webpage'

import pallete from '../Styles/pallete'

class CookieNotice extends Component {
  render () {
    if (this.props.webpage.accepted) {
      return null
    }
    else {
      return (
        <div className={css(styles.container)}>
          <div className={css(styles.text)}>
            This webpage uses cookies. By continuing, you agree to their use. We will never use them to track you.
          </div>
          <div
            className={css(styles.dismiss)}
            onClick={ (event) => webpage.acceptCookies() }>
            Got it!
          </div>
        </div>
      )
    }
  }
}
CookieNotice.propTypes = {
  webpage: PropTypes.object,
}
export default inject('webpage')(observer(CookieNotice))

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'center',
    'justify-content': 'space-between',
    'flex-wrap': 'nowrap',
    backgroundColor: pallete.yellow,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    'flex-grow': 1,
  },
  dismiss: {
    'flex-basis': 'auto',
    'flex-shrink': 0,
    'white-space': 'nowrap',
    backgroundColor: pallete.blue,
    padding: '1rem',
    float: 'right',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: pallete.red,
    },
  },
})

