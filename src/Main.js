import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'

//Views
import Home from './Views/Home'
import Login from './Views/Login'
import Profile from './Views/Profile'
import Post from './Views/Post'
import PP from './Views/PrivacyPolicy'
import TOS from './Views/TermsOfUse'

//State
import user from './States/User'
user.loadUser()

export default class Main extends Component {
  render() {
    return (
      <main>

        <Provider user={user}>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/me' component={Profile} />
            <Route path='/post' component={Post} />
            <Route path='/privacy' component={PP} />
            <Route path='/terms' component={TOS} />
          </Switch>

        </Provider>

      </main>
    )
  }
}
