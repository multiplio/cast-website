import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App/App.js';

import Home from './Views/Home.js';
import Contact from './Views/Contact.js';

export default (
	<BrowserRouter>
  	<App>
  		<Switch>
		    <Route exact path='/' component={Home} />
		    <Route path='/contact' component={Contact} />
	    </Switch>
	  </App>
  </BrowserRouter>
);
