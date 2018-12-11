import React, { Component } from 'react'

import Header from '../Components/Header'
import PostInput from '../Components/PostInput'
import Cookie from '../Components/CookieNotice'

export default class Post extends Component {
  componentDidMount () {
    document.title = 'QuackUp - post'
  }
  render () {
    return (
      <div>
        <Header/>

        <div className="content">
          This is the post page.

          <PostInput/>

        </div>

        <Cookie />
      </div>
    )
  }
}

