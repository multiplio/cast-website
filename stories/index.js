import React from 'react'
import { Provider } from 'mobx-react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

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
    () =>
    <Provider user={{displayName: "username", pictureLink: "https://pbs.twimg.com/profile_images/994968298663174145/uE6xzH0m_bigger.jpg"}}>
      <LoginView/>
    </Provider>
  )
  .add('view - logged out',
    () =>
    <Provider user={{displayName: null, pictureLink: null}}>
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
    <Provider user={{displayName: "username", pictureLink: "https://pbs.twimg.com/profile_images/994968298663174145/uE6xzH0m_bigger.jpg"}}>
      <Header/>
    </Provider>
  );

storiesOf('ProfileButton', module)
  .add('profileButton - logged in',
    () => <ProfileButton user={{displayName: "username", pictureLink: "https://pbs.twimg.com/profile_images/994968298663174145/uE6xzH0m_bigger.jpg"}}/>
  )
  .add('profileButton - logged out',
    () => <ProfileButton user={{displayName: null, pictureLink: null}}/>
  );

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}/>
//   ));
