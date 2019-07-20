import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import Spinner from './Spinner'

const SendButton = ({ statusText, loading, onClick, ...rest }) => {
    if (loading) {
      return <Spinner />
    }

    return (
      <div {...rest}>

        <div className={css(styles.buttons)}>
          <div className={css(styles.postButton)} onClick={onClick}>
            <div className={css(styles.postButtonText)}>
              Post
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
}
export default SendButton

const styles = StyleSheet.create({
  buttons: {
    width: '100%',
    'margin-top': '20px',

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
    'transition': '0.3s',
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

