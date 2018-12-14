import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

// import pallete from '../Styles/pallete'

import Header from '../Components/Header'
import Cookie from '../Components/CookieNotice'

export default class Home extends Component {
  componentDidMount () {
    document.title = 'QuackUp'
  }
  render () {
    return (
      <div className={css(styles.container)}>
        <Header />

        <div className={css(styles.view)}>
          This is the home page.

          <Link to="/login">Login</Link>

          <h3>Beta</h3>

          Content is king

          <p>Take ownership of your content.</p>
          <p>Content as content, publishers as consumers.</p>
          <p>State of the art technology - Solid</p>
          <p>Easy to use</p>

          <ul>
            <li>Hassle free</li>
            <li>Platform agnostic</li>
            <li>Transparent</li>
            <li>State of the art</li>
          </ul>

          <ol>
            <li>Post your content</li>
            <li>Selects platforms</li>
            <li>Content is securelly saved</li>
            <li>Links are posted to selected platforms</li>
          </ol>

          planned interoperability - Solid / IPFS
          freedom of data

        </div>

        <Cookie />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  view: {
    margin: 0,
    display: 'flex',
    'align-items': 'center',
    'align-content': 'center',
    'justify-content': 'space-between',
    'flex-direction': 'column',
    'text-align': 'center',
  },
})

