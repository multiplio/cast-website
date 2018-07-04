import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Main from './Main.js'

import registerServiceWorker from './registerServiceWorker';

ReactDom.render(
  <BrowserRouter>
  	<Main />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
