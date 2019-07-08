import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import ipfs from '../Assets/ipfs-logo-vector-ice-text.svg'
import social from '../Assets/social_media.png'

const Explanation = () => {
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

      <section className={css(styles.postText)}>
        <div>
          <h1>Post once</h1>
          <p>
            Create your beautiful post in our intuitive designer.
          </p>
        </div>
      </section>

      <section className={css(styles.storage)}>
        <img alt="" src={ipfs} className={css(styles.image)} />
      </section>
      <section className={css(styles.storageText)}>
        <div>
          <h1>Distributed storage</h1>
          <p>
            Your post is stored in&nbsp;
            <a style={{ textDecoration: 'underline' }} href="https://ipfs.io/">
              interplanetary file system
            </a>.
            It&apos;s a distrubuted immutable global storage network,
            so your data is always safe and always available.
          </p>
        </div>
      </section>

      <section className={css(styles.publish)}>
        <img alt="" src={social} className={css(styles.image)} />
      </section>
      <section className={css(styles.publishText)}>
        <div>
          <h1>Publish anywhere</h1>
          <p>
            Link your post to any social network.
          </p>
        </div>
      </section>

      <section className={css(styles.socialText)}>
        <div>
          <h1>Native view</h1>
          <p>
            Your post is displayed in a native view.
            All the benefits, same experience.
          </p>
        </div>
      </section>

    </div>
  )
}
export default Explanation

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'grid',
    'grid-template': `
      "what what"
      "how how"
      "post-text post-text"
      "storage-text storage"
      "publish publish-text"
      "social-text social-text"
    `,
    'grid-template-columns': '50% 50%',
    'grid-template-rows': '200px 70px auto',
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

  image: {
    'align-self': 'center',
    'max-width': '100%',
    'height': '100%',
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
    position: 'relative',
    padding: '2rem 20%',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'space-around',
  },
  storageText: {
    'grid-area': 'storage-text',
    padding: '0 2rem',
    display: 'flex',
    'align-items': 'center',
    'text-align': 'center',
    'justify-content': 'space-around',
  },

  publish: {
    'grid-area': 'publish',
    display: 'flex',
    position: 'relative',
    padding: '0 2rem',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'space-around',
  },
  publishText: {
    'grid-area': 'publish-text',
    padding: '0 2rem',
    display: 'flex',
    'align-items': 'center',
    'text-align': 'center',
    'justify-content': 'space-around',
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

