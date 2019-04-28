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
          <div className={css(styles.view)}>

            <div className={css(styles.text)}>
              This webpage uses cookies. By continuing, you agree to their use.
            </div>
            <div
              className={css(styles.dismiss)}
              onClick={ (event) => webpage.acceptCookies() }>
              Got it!
            </div>

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
    'height': '5rem',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    'justify-content': 'space-around',
    backgroundColor: 'white',
  },
  view: {
    width: '100%',
    'max-width': '1000px',
    height: '100%',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    'flex-wrap': 'nowrap',
  },

  text: {
    'flex-grow': 1,
    margin: '0 0 0 1.5rem',
  },
  dismiss: {
    'flex-basis': 'auto',
    'flex-shrink': 0,
    'white-space': 'nowrap',
    padding: '0.5rem',
    margin: '0 1.5rem 0 0',
    float: 'right',
    cursor: 'pointer',
    border: '3px solid ' + pallete.background,
    ':hover': {
      'font-weight': 'bold',
    },
  },
})

