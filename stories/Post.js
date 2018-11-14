import React from 'react'
import { Provider } from 'mobx-react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

import Post from '../src/Components/PostInput'

import {userIn, userOut} from './userPlaceholders'

storiesOf('Post', module)
  .add('display',
    () =>
    <Post
      edit={false}
    />
  )
  .add('edit',
    () =>
    <Post
      edit={true}
    />
  );

