import React, { Component } from "react";

import Header from "../Components/Header.js";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          This is the home page.
          <a href="/login">
            Login
          </a>
        </div>
      </div>
    );
  }
}
