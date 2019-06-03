import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

import pallete from '../Styles/pallete'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Cookie from '../Components/CookieNotice'

const Container = ({ children }) => {
  return (
    <div className={css(styles.container)}>

      <Header/>

      { children }

      <Footer/>

      <Cookie/>

    </div>
  )
}
Container.propTypes = {
  children: PropTypes.object,
}
export default Container

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallete.white,
    'max-width': '1200px',
    'margin': '0 auto',
    'min-height': 'calc(100% - 2rem)',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    '@media (min-width: 1200px)': {
      'padding-top': '2rem',
    },
  },
})

