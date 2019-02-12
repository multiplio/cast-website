import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

// import pallete from '../Styles/pallete'

import Container from '../Components/Container'

import Post from '../Components/PostInput'

class Home extends Component {
  componentDidMount () {
    document.title = 'Cast'
  }
  render () {
    const loggedIn =
    <div>
      <Post edit={true} />
    </div>

    const loggedOut =
    <div>
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
      interoperability - IPFS
      freedom of data
    </div>

    return (
      <Container>
        <div className={css(styles.container)}>

          <div className={css(styles.view)}>
            {
              this.props.user.loaded === true
                ? (this.props.user.displayName !== null
                  ? loggedIn
                  : loggedOut
                )
                : null
            }
          </div>

        </div>
      </Container>
    )
  }
}
Home.propTypes = {
  user: PropTypes.object,
}
export default inject('user')(observer(Home))

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

