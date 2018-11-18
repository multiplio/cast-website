import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../Components/Header.js'
import User from '../Components/User.js'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Header/>

        <div className="content">
          This is the profile page.

          <User/>

          <Link to="/logout">Log out</Link>

        </div>
      </div>
    )
  }
}
