import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'
import logo from '../Assets/cast-fontlogo-white.svg'

import ProfileButton from '../Components/ProfileButton'

export default class Header extends Component {
  render () {
    return (
      <div className={css(styles.header)}>

        <div className={css(styles.logoGroup)}>
          <Link to="/">
            <div className={css(styles.logo)}>
              <img alt="logo" className={css(styles['logo-image'])} src={logo} />
            </div>
          </Link>
          <span className={css(styles.tag)}>BETA</span>
        </div>

        <ProfileButton inheritStyles={styles.profile}/>

      </div>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: pallete.background,
    height: '6.5rem',
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    '@media (max-width: 600px)': {
      height: '4rem',
    },
  },

  logoGroup: {
    display: 'flex',
  },
  logo: {
    pointer: 'cursor',
    'padding': '1rem',
    'margin-left': '0.5rem',
  },
  'logo-image': {
    height: '2.5rem',
    width: 'auto',
    '@media (max-width: 600px)': {
      height: '2rem',
    },
  },
  tag: {
    color: pallete.white,
    'font-size': '20px',
    'margin-top': '12px',
    '@media (max-width: 600px)': {
      'font-size': '18px',
    },
  },

  profile: {
    'margin-right': '0.5rem',
  },
})

