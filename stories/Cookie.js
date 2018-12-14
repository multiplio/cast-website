import React from 'react'
import { Provider } from 'mobx-react'
import { storiesOf } from '@storybook/react'

import Cookie from '../src/Components/CookieNotice'

import { fresh, accepted } from './webpagePlaceholders'

storiesOf('Cookie', module)
  .add('notice', () =>
    <Provider webpage={fresh}>
      <Cookie />
    </Provider>
  )
  .add('accepted', () =>
    <Provider webpage={accepted}>
      <Cookie />
    </Provider>
  )

