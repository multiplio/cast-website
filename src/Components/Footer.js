import React from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import logo from '../Assets/cast-fontlogo-white.svg'
import pallete from '../Styles/pallete'

const Footer = () => {
  return (
    <div className={css(styles.footer)}>

      <section className={css(styles.view)}>
        <Link className={css(styles.item)} to="/">Home</Link>
        <Link className={css(styles.item)} to="/terms">Terms of Use</Link>
        <Link className={css(styles.item)} to="/privacy">Privacy Policy</Link>
      </section>

      <section className={css(styles.logo)}>
        <Link to="/">
          <img alt="logo" className={css(styles['logo-image'])} src={logo} />
        </Link>
      </section>

      <section className={css(styles.copyright)}>
        <span>Copyright © 2019 <a href="https://multipl.io">multipl</a></span>
      </section>

    </div>
  )
}
export default Footer

const styles = StyleSheet.create({
  footer: {
    backgroundColor: pallete.background,
    color: pallete.white,
    display: 'grid',
    'grid-template': `
      "links logo"
      "copyright copyright"
    `,
    'font-size': '11px',
    'font-weight': 'bold',
  },
  view: {
    'grid-area': 'links',
    margin: '1.5rem',
    display: 'flex',
    'flex-direction': 'column',
    'text-align': 'right',
  },
  item: {
    color: pallete.white,
    'text-decoration': 'none',
    'font-size': '1rem',
  },
  logo: {
    'grid-area': 'logo',
    margin: '1.5rem',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
  },
  'logo-image': {
    height: '2.5rem',
    width: 'auto',
  },

  copyright: {
    'grid-area': 'copyright',
    margin: '0 1.5rem 0.5rem 1.5rem',
    display: 'flex',
    'justify-content': 'center',
  },
})

