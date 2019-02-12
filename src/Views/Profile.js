import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import Container from '../Components/Container'

import User from '../Components/User'

export default class Home extends Component {
  componentDidMount () {
    document.title = 'Cast - My profile'
  }
  render () {
    return (
      <Container>
        <div className="content">
          This is the profile page.

          <User/>

          <a href="/logout">Log out</a>

        </div>
      </Container>
    )
  }
}

