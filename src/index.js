import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Main from './Main'

import registerServiceWorker from './registerServiceWorker'

// States
import user from './States/User'
user.loadUser()

// Render
ReactDOM.render(
  <Router>
    <Main />
  </Router>
  ,
  document.getElementById('root')
)

// Service worker
registerServiceWorker()
