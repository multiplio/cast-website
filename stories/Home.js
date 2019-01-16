import React from 'react'
import { Provider } from 'mobx-react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import HomeView from '../src/Views/Home'

import { userIn, userOut } from './userPlaceholders'
import { accepted } from './webpagePlaceholders'

storiesOf('Home', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={ ['/'] }>
      { story() }
    </MemoryRouter>
  ))
  .add('view - logged in',
    () =>
      <Provider user={userIn} webpage={accepted}>
        <HomeView/>
      </Provider>
  )
  .add('view - logged out',
    () =>
      <Provider user={userOut} webpage={accepted}>
        <HomeView/>
      </Provider>
  )

