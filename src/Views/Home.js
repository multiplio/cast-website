import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Components/Header.js";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>

        <div className="content">
          This is the home page.

          <Link to="/login">Login</Link>

          <h1>Beta</h1>
          <p>Take ownership of your content.</p>
          <p>Content as content, publishers as consumers.</p>
          <ul>
            <li>Hassle free</li>
            <li>Platform agnostic</li>
            <li>Transparent</li>
            <li>State of the art</li>
          </ul>
        </div>
      </div>
    );
  }
}
