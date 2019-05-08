import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'

// Views
import Home from './Views/Home'

import Profile from './Views/Profile'
import Login from './Views/Login'

import PP from './Views/PrivacyPolicy'
import TOS from './Views/TermsOfUse'

import Unsubscribed from './Views/Unsubscribed'

// States
import user from './States/User'
import webpage from './States/Webpage'

export default class Main extends Component {
  render () {
    return (
      <main>

        <Provider user={user} webpage={webpage}>

          <Switch>
            <Route exact path='/' component={Home} />

            <Route path='/me' component={Profile} />
            <Route path='/login' component={Login} />

            <Route path='/privacy' component={PP} />
            <Route path='/terms' component={TOS} />

            <Route path='/unsubscribed' component={Unsubscribed} />
          </Switch>

        </Provider>

      </main>
    )
  }
}

