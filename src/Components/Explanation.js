import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import post from '../Assets/post.svg'
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

      <section className={css(styles.postSection)}>
        <img alt="" src={post} className={css(styles.post)} />
      </section>
      <section className={css(styles.postText)}>
        <h1>1. Post</h1>
        <p>Simple as that!</p>
      </section>

      <section className={css(styles.clusterSection)}>
        <img alt="" src={cluster} className={css(styles.cluster)} />
      </section>
      <section className={css(styles.clusterText)}>
        <h1>2. Safelly stored</h1>
        <p>Stored in an immutable distributed global storage, always safe, always available.</p>
      </section>

      <section className={css(styles.socialSection)}>
        <p>
          <img alt="" src={twitter} className={css(styles.socialImage)} />
          <img alt="" src={facebook} className={css(styles.socialImage)} />
          <img alt="" src={pinterest} className={css(styles.socialImage)} />
          <img alt="" src={reddit} className={css(styles.socialImage)} />
        </p>
        <p>
          <img alt="" src={tumblr} className={css(styles.socialImage)} />
          <img alt="" src={linkedin} className={css(styles.socialImage)} />
          <img alt="" src={instagram} className={css(styles.socialImage)} />
          <img alt="" src={whatsapp} className={css(styles.socialImage)} />
        </p>
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
      "what"        200px
      "postText"
      "post"
      "clusterText"
      "cluster"
      "social"
    `,
  },

  what: {
    'grid-item': 'what',
    color: 'white',
    backgroundColor: 'black',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
  },

  postSection: {
    'grid-area': 'post',
  },
  post: {
    width: '250px',
    height: 'auto',
  },
  postText: {
    'grid-area': 'postText',
  },

  clusterSection: {
    'grid-area': 'cluster',
  },
  cluster: {
    width: '200px',
    height: 'auto',
  },
  clusterText: {
    'grid-area': 'clusterText',
  },

  socialSection: {
    'grid-area': 'social',
    'width': '100%',
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'center',
  },
  socialImage: {
    width: '55px',
    height: 'auto',
    padding: '5px',
  },
})

