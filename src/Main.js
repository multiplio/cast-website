import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Views/Home.js';
import Login from './Views/Login.js';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
			    <Route exact path='/' component={Home} />
			    <Route path='/login' component={Login} />
			  </Switch>
      </main>
    );
  }
}
