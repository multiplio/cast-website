import React from 'react'
import { Provider } from 'mobx-react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import Login from '../src/Components/Login'
import LoginView from '../src/Views/Login'

import { userIn, userOut } from './userPlaceholders'

storiesOf('Login', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={ ['/'] }>
      { story() }
    </MemoryRouter>
  ))
  .add('button',
    () => <Login/>
  )
  .add('view - logged in',
    () =>
      <Provider user={userIn}>
        <LoginView/>
      </Provider>
  )
  .add('view - logged out',
    () =>
      <Provider user={userOut}>
        <LoginView/>
      </Provider>
  )

