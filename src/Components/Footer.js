import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

const Footer = () => {
  return (
    <div className={css(styles.footer)}>

      <section className={css(styles.view)}>
        <span className={css(styles.item)}>Copyright ©2019 Tekwrks</span>
        <Link className={css(styles.item)} to="/terms">Terms of Use</Link>
        <Link className={css(styles.item)} to="/privacy">Privacy Policy</Link>
      </section>

    </div>
  )
}
export default Footer

const styles = StyleSheet.create({
  footer: {
    backgroundColor: pallete.background,
    height: '4rem',
    display: 'flex',
    'justify-content': 'space-around',
    'align-items': 'center',
    'font-size': '11px',
    'font-weight': 'bold',
  },
  view: {
  },
  item: {
    margin: '0 3px',
  },
})

