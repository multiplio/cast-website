import React from 'react'
import { Provider } from 'mobx-react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import LoginView from '../src/Views/Login'

import Login from '../src/Components/Login'
import User from '../src/Components/User'
import Post from '../src/Components/PostInput'
import Header from '../src/Components/Header'
import ProfileButton from '../src/Components/ProfileButton'

import {userIn, userOut} from './userPlaceholders'

storiesOf('Login', module)
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
  );

storiesOf('Post', module)
  .add('display',
    () => <Post edit={false} />
  )
  .add('edit',
    () => <Post edit={true} />
  );

storiesOf('Header', module)
  .add('header',
    () =>
    <Provider user={userIn}>
      <Header/>
    </Provider>
  );

storiesOf('ProfileButton', module)
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

storiesOf('User', module)
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

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}/>
//   ));
