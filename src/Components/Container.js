import React from 'react'
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
export default Container

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallete.white,
    width: '1000px',
    margin: '2rem auto',
    'min-height': 'calc(100% - 4rem)',
  },
})

