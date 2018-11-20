import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../Components/Header.js'

export default class Home extends Component {
  componentDidMount () {
    document.title = 'QuackUp'
  }
  render () {
    return (
      <div>
        <Header/>

        <div className="content">
          This is the home page.

          <Link to="/login">Login</Link>

          <h5>Beta</h5>

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

          planned interoperability - Solid / IPFS
          freedom of data

        </div>
      </div>
    )
  }
}
