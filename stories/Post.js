import React from 'react'
import { Provider } from 'mobx-react'
import { storiesOf } from '@storybook/react'

import Post from '../src/Components/PostInput'

import { userIn } from './userPlaceholders'

storiesOf('Post', module)
  .add('display',
    () =>
      <Provider user={userIn}>
        <Post
          edit={false}
        />
      </Provider>
  )
  .add('edit',
    () =>
      <Provider user={userIn}>
        <Post
          edit={true}
        />
      </Provider>
  )

