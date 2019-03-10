import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import twitter from '../Assets/social/twitter.svg'
import facebook from '../Assets/social/facebook.svg'
import pinterest from '../Assets/social/pinterest.svg'
import reddit from '../Assets/social/reddit.svg'
import tumblr from '../Assets/social/tumblr.svg'
import linkedin from '../Assets/social/linkedin.svg'
import instagram from '../Assets/social/instagram.svg'
import whatsapp from '../Assets/social/whatsapp.svg'

import pallete from '../Styles/pallete'

const Explanaition = () => {
  return (
    <div>

      <section>
      </section>

      <section>
      </section>

      <section>
        <img alt="" src={twitter} className={css(styles.socialImage)} />
        <img alt="" src={facebook} className={css(styles.socialImage)} />
        <img alt="" src={pinterest} className={css(styles.socialImage)} />
        <img alt="" src={reddit} className={css(styles.socialImage)} />
        <img alt="" src={tumblr} className={css(styles.socialImage)} />
        <img alt="" src={linkedin} className={css(styles.socialImage)} />
        <img alt="" src={instagram} className={css(styles.socialImage)} />
        <img alt="" src={whatsapp} className={css(styles.socialImage)} />
      </section>

    </div>
  )
}
export default Explanaition

const styles = StyleSheet.create({
  socialImage: {
    width: '55px',
    height: 'auto',
    padding: '5px',
  },
})

