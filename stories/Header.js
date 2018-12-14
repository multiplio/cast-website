import React from 'react'
import { Provider } from 'mobx-react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import Header from '../src/Components/Header'

import {userIn, userOut} from './userPlaceholders'

storiesOf('Header', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={ ['/'] }>
      { story() }
    </MemoryRouter>
  ))
  .add('header - logged in',
    () =>
      <Provider user={userIn}>
        <Header/>
      </Provider>
  )
  .add('header - logged out',
    () =>
      <Provider user={userOut}>
        <Header/>
      </Provider>
  )

