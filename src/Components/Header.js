import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'
import logo from '../Assets/logo-transparent-color.svg'

import ProfileButton from '../Components/ProfileButton'

export default class Header extends Component {
  render () {
    return (
      <div className={css(styles.header)}>

        <Link to="/">
          <div className={css(styles.logo)}>
            <img alt="logo" className={css(styles['logo-image'])} src={logo} />
            <p className={css(styles['logo-text'])}>QuackUp!</p>
          </div>
        </Link>

        <ProfileButton styles={styles.profile}/>

      </div>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: pallete.white,
    height: '3rem',
    margin: 0,
  },
  profile: {
    float: 'right',
  },
  logo: {
    pointer: 'cursor',
  },
  'logo-image': {
    float: 'left',
    height: '2.5rem',
    'padding-top': '0.25rem',
    'padding-left': '0.5rem',
  },
  'logo-text': {
    'margin': 0,
    'padding-left': '0.5rem',
    float: 'left',
    'font-size': '1.4rem',
    'line-height': '3rem',
    color: 'black',
  },
})

