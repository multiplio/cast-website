import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import LoginView from '../src/Views/Login'

import Login from '../src/Components/Login.js'
import Post from '../src/Components/PostInput.js'
import Header from '../src/Components/Header.js'
import ProfileButton from '../src/Components/ProfileButton.js'

storiesOf('Login', module)
  .add('button',
    () => <Login/>
  )
  .add('view - logged in',
    () => <LoginView user={{displayName: "username", pictureLink: null}}/>
  )
  .add('view - logged out',
    () => <LoginView user={{displayName: null, pictureLink: null}}/>
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
    () => <Header/>
  );

storiesOf('ProfileButton', module)
  .add('profileButton',
    () => <ProfileButton/>
  );

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}/>
//   ));
