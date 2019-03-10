import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'

// import pallete from '../Styles/pallete'

import Container from '../Components/Container'

import Post from '../Components/PostInput'
import Explanaition from '../Components/Explanaition'

class Home extends Component {
  componentDidMount () {
    document.title = 'Cast'
  }
  render () {
    const loggedIn =
    <div>
      <Post edit={true} />
    </div>

    const loggedOut = <Explanaition />

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

