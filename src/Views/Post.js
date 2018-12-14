import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Header from '../Components/Header'
import PostInput from '../Components/PostInput'
import Button from '../Components/PostButton.js'
import Cookie from '../Components/CookieNotice'

export default class Post extends Component {
  componentDidMount () {
    document.title = 'QuackUp - post'
  }
  render () {
    return (
      <div className={css(styles.container)}>
        <Header/>

        <div className={css(styles.view)}>

          <PostInput />
          <Button>Post</Button>

        </div>

        <Cookie />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  view: {
    display: 'flex',
    'padding-top': '1rem',
    'flex-direction': 'column',
    'align-items': 'center',
  },
})

