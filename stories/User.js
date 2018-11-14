import React from 'react'
import { Provider } from 'mobx-react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import User from '../src/Components/User'

import {userIn, userOut} from './userPlaceholders'

storiesOf('User', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={ ['/'] }>
      { story() }
    </MemoryRouter>
  ))
  .add('user - logged in',
    () =>
    <User
      user={userIn}
    />
  )
  .add('user - logged out',
    () =>
    <User
      user={userOut}
    />
  );

