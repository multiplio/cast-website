import React, { Component } from "react"
import { observer, inject } from "mobx-react"

import LoginC from "../Components/Login.js"
import Header from "../Components/Header.js"

class Login extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Login</h1>
        <div>logged in : { this.props.user.displayName }</div>
        <LoginC/>
      </div>
    );
  }
}
export default inject("user")(observer(Login));
