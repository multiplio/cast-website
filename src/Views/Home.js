import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
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
      <p>Take ownership of your content.</p>
      <p>Content as content, publishers as consumers.</p>
      <p>Easy to use.</p>
      <p>Post once, link anywhere!</p>

      <ol>
        <li>Post your content</li>
        <li>Selects platforms</li>
        <li>Content is securelly saved</li>
        <li>Links are posted to selected platforms</li>
      </ol>
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

