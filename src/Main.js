import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Views/Home.js';
import Login from './Views/Login.js';
import Post from './Views/Post.js';

import PP from './Views/PrivacyPolicy.js';
import TOS from './Views/TermsOfUse.js';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/post' component={Post} />

          <Route path='/privacy' component={PP} />
          <Route path='/terms' component={TOS} />
        </Switch>
      </main>
    );
  }
}
