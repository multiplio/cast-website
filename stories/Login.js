import React from 'react'
import { Provider } from 'mobx-react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import LoginView from '../src/Views/Login'

import { userIn, userOut } from './userPlaceholders'
import { accepted } from './webpagePlaceholders'

storiesOf('Login', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={ ['/'] }>
      { story() }
    </MemoryRouter>
  ))
  .add('logged in',
    () =>
      <Provider user={userIn} webpage={accepted}>
        <LoginView/>
      </Provider>
  )
  .add('logged out',
    () =>
      <Provider user={userOut} webpage={accepted}>
        <LoginView/>
      </Provider>
  )

