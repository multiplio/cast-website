import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import Spinner from './Spinner'

const SendButton = ({ statusText, loading, onClick, style, ...rest }) => {
  if (loading) {
    return (
      <div {...rest}>
        <Spinner size={50} color={'#000'} />
      </div>
    )
  }

  return (
    <div className={css(style, styles.container)} {...rest}>

      <div className={css(styles.buttons)}>
        <div className={css(styles.postButton)} onClick={onClick}>
          <div className={css(styles.postButtonText)}>
            Publish
          </div>
        </div>
      </div>

      <div>
        { (statusText !== null || statusText !== '') && statusText }
      </div>

    </div>
  )
}
SendButton.propTypes = {
  statusText: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
}
export default SendButton

const styles = StyleSheet.create({
  container: {
    transition: '500ms',
  },

  buttons: {
    width: '100%',

    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
    'align-items': 'center',
  },

  postButton: {
    background: 'linear-gradient(-90deg, #CF77F3 0%, #009BFF 47%, #2AC9DB 100%)',
    color: 'white',
    'font-weight': 'bold',

    margin: '1.5rem 0',
    padding: '1rem 2.5rem',
    'border-radius': '50px',

    cursor: 'pointer',
    transition: '0.3s',
    ':hover': {
      margin: '1.25rem 0',
      padding: '1.25rem 3rem',
    },

    display: 'inline-block',
  },
  postButtonText: {
    'font-family': '"Helvetica Neue", Helvetica, Arial, sans-serif',
    'font-size': '16px',
    'text-align': 'center',
  },
})

