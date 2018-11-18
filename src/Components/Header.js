import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

import ProfileButton from '../Components/ProfileButton'

export default class Header extends Component {
  render () {
    return (
      <div className={css(styles.header)}>
        header
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
})
