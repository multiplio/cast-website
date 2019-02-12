import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

const Footer = () => {
  return (
    <div className={css(styles.footer)}>

      <Link to="/terms">Terms of Use</Link>
      <Link to="/privacy">Privacy Policy</Link>

    </div>
  )
}
export default Footer

const styles = StyleSheet.create({
  footer: {
    backgroundColor: pallete.background,
    height: '5rem',
    display: 'flex',
    'align-items': 'left',
  },
})

