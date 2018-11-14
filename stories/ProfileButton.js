import React from 'react'
import { Provider } from 'mobx-react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import ProfileButton from '../src/Components/ProfileButton'

import {userIn, userOut} from './userPlaceholders'

storiesOf('ProfileButton', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={ ['/'] }>
      { story() }
    </MemoryRouter>
  ))
  .add('profileButton - logged in',
    () =>
    <ProfileButton
      user={userIn}
    />
  )
  .add('profileButton - logged out',
    () =>
    <ProfileButton
      user={userOut}
    />
  );

