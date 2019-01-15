import React from 'react'
import { storiesOf } from '@storybook/react'

import Post from '../src/Components/PostInput'

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
  )

