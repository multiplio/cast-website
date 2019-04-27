import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './index.css'
import Main from './Main'

import registerServiceWorker from './registerServiceWorker'

// scroll to top on location change
const history = createBrowserHistory()
history.listen(_ => {
  window.scrollTo(0, 0)
})

// Render
ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>
  ,
  document.getElementById('root')
)

// Service worker
registerServiceWorker()

