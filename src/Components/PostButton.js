import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

// import pallete from '../Styles/pallete'

const Button = ({ style, children }) => {
  return (
    <button className={css(style, styles.button)}>
      <span>{ children }</span>
    </button>
  )
}
Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.object,
}
export default Button

const styles = StyleSheet.create({
  button: {
    display: 'inline-block',
    'border-radius': '5px',
    'background-color': '#1da1f2',
    border: 'none',
    color: '#FFFFFF',
    'text-align': 'center',
    'font-size': '20px',
    padding: '10px 20px',
    transition: 'all 0.5s',
    cursor: 'pointer',
    'vertical-align': 'middle',
    margin: '0.5rem',
  },
})

