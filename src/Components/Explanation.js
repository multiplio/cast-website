import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import cluster from '../Assets/cluster.svg'

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

      <section className={css(styles.post)}>
      </section>
      <section className={css(styles.postText)}>
        <div>
          <h1>Post</h1>
        </div>
      </section>

      <section className={css(styles.storage)}>
        <img alt="" src={cluster} className={css(styles.storageImg)} />
      </section>
      <section className={css(styles.storageText)}>
        <div>
          <h1>Safelly Stored</h1>
          <p>Stored in an immutable distributed global storage, always safe, always available.</p>
        </div>
      </section>

      <section className={css(styles.publish)}>
      </section>
      <section className={css(styles.publishText)}>
        <div>
          <h1>Publish</h1>
        </div>
      </section>

      <section className={css(styles.social)}>
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
      "post post-text"
      "storage-text storage"
      "publish publish-text"
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

  post: {
    'grid-area': 'post',
    display: 'grid',
    'grid-template-columns': '55px 55px 55px 55px',
    'grid-template-rows': '55px 55px',
    'grid-gap': '5px 5px',
    'justify-content': 'center',
    'align-content': 'center',
  },
  postText: {
    'grid-area': 'post-text',
    padding: '2rem',
    display: 'flex',
    'align-items': 'center',
    'text-align': 'center',
    'justify-content': 'space-around',
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
    'max-height': '100%',
  },
  storageText: {
    'grid-area': 'storage-text',
    padding: '2rem',
    display: 'flex',
    'align-items': 'center',
    'text-align': 'center',
    'justify-content': 'space-around',
  },

  publish: {
    'grid-area': 'publish',
    display: 'flex',
    padding: '2rem',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'space-around',
  },
  publishText: {
    'grid-area': 'publish-text',
    padding: '2rem',
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
})

