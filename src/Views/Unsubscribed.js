import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Container from '../Components/Container'

export default class TermsOfUse extends Component {
  componentDidMount () {
    document.title = 'Cast - Unsubscribed'
  }

  render () {
    return (
      <Container>
        <div className={css(styles.view)}>

          <h1 className={css(styles.heading)}>
            Unsubscribed
          </h1>
          <p className={css(styles.subheading)}>
            Sorry to see you go.
          </p>

        </div>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    'flex-direction': 'column',
    margin: '1.5rem 1.5rem',
  },

  heading: {
    'font-size': '3.5rem',
    margin: 0,
  },
  subheading: {
    'font-size': '2rem',
  },
})
