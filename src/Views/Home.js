import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'

// import pallete from '../Styles/pallete'

import Container from '../Components/Container'

import Post from '../Components/PostInput'
import Explanation from '../Components/Explanation'

class Home extends Component {
  componentDidMount () {
    document.title = 'Cast'
  }
  render () {
    return (
      <Container>
        <div className={css(styles.container)}>

          <div className={css(styles.view)}>
            <div className={css(styles.post)}>
              <Post edit={true} />
            </div>

            <Explanation />
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
  post: {
    padding: '2rem 0',
    width: '100%',
    height: '100%',
  },
})

