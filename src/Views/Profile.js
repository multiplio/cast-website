import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import Header from '../Components/Header'
import User from '../Components/User'
import Cookie from '../Components/CookieNotice'

export default class Home extends Component {
  componentDidMount () {
    document.title = 'QuackUp - my profile'
  }
  render () {
    return (
      <div>
        <Header/>

        <div className="content">
          This is the profile page.

          <User/>

          <a href="/logout">Log out</a>

        </div>

        <Cookie/>
      </div>
    )
  }
}

