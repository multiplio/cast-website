import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import cluster from '../Assets/cluster.svg'

import twitter from '../Assets/social/twitter.svg'
import facebook from '../Assets/social/facebook.svg'
import pinterest from '../Assets/social/pinterest.svg'
import reddit from '../Assets/social/reddit.svg'
import tumblr from '../Assets/social/tumblr.svg'
import linkedin from '../Assets/social/linkedin.svg'
import instagram from '../Assets/social/instagram.svg'
import whatsapp from '../Assets/social/whatsapp.svg'

// import pallete from '../Styles/pallete'

const Explanaition = () => {
  return (
    <div className={css(styles.view)}>

      <section className={css(styles.what)}>
        <div>
          <h1>What?</h1>
          <h3>Single message, all your social media.</h3>
        </div>
      </section>

      <section className={css(styles.how)}>
        <h1>How?</h1>
      </section>

      <section className={css(styles.storage)}>
        <img alt="" src={cluster} className={css(styles.storageImg)} />
      </section>

      <section className={css(styles.storageText)}>
        <div>
          <h1>Safely Stored</h1>
          <p>Stored in an immutable distributed global storage, always safe, always available.</p>
        </div>
      </section>

      <section className={css(styles.social)}>
        <img alt="" src={twitter} className={css(styles.socialImage)} />
        <img alt="" src={facebook} className={css(styles.socialImage)} />
        <img alt="" src={pinterest} className={css(styles.socialImage)} />
        <img alt="" src={reddit} className={css(styles.socialImage)} />
        <img alt="" src={tumblr} className={css(styles.socialImage)} />
        <img alt="" src={linkedin} className={css(styles.socialImage)} />
        <img alt="" src={instagram} className={css(styles.socialImage)} />
        <img alt="" src={whatsapp} className={css(styles.socialImage)} />
      </section>

      <section className={css(styles.socialText)}>
        <div>
          <h1>All Your Social Media</h1>
          <p>Post once, publish anywhere.</p>
        </div>
      </section>

    </div>
  )
}
export default Explanaition

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'grid',
    'grid-template': `
      "what what"
      "how how"
      "storage storage-text"
      "social-text social"
    `,
    'grid-template-columns': '50% 50%',
    'grid-template-rows': '200px 70px 300px 300px',
  },

  what: {
    'grid-area': 'what',
    color: 'white',
    backgroundColor: 'black',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
  },

  how: {
    'grid-area': 'how',
  },

  storage: {
    'grid-area': 'storage',
    display: 'flex',
    padding: '2rem',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'space-around',
  },
  storageImg: {
    'max-height': '80%',
  },
  storageText: {
    'grid-area': 'storage-text',
    padding: '2rem 4rem',
    display: 'flex',
    'align-items': 'center',
    'text-align': 'center',
    'justify-content': 'space-around',
  },

  social: {
    'grid-area': 'social',
    display: 'grid',
    'grid-template-columns': '55px 55px 55px 55px',
    'grid-template-rows': '55px 55px',
    'grid-gap': '5px 5px',
    'justify-content': 'center',
    'align-content': 'center',
  },
  socialText: {
    'grid-area': 'social-text',
    padding: '2rem',
    display: 'flex',
    'align-items': 'center',
    'text-align': 'center',
    'justify-content': 'space-around',
  },
  socialImage: {
    width: '55px',
    height: 'auto',
  },
})

