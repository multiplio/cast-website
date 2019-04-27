# cast website
[![Build Status](https://travis-ci.org/multiplio/cast-website.svg?branch=master)](https://travis-ci.org/multiplio/cast-website)

[https://cast.multipl.io](https://cast.multipl.io)

## Consumes

[user api](https://github.com/multiplio/user):
- GET ```/auth/<service>/``` initialize authentication using a given
  ```<service>```, redirects back with session cookie set
- GET ```/identity/``` returns public profile for the currently
  authenticated user

publish api:
- POST ```/publish/``` try to submit a new post for publishing, auth
  using a session cookie

## Environment (build time only)

```
NODE_ENV=production

REACT_APP_GET_IDENTITY_PATH='/identity/'
REACT_APP_TWITTER_LOGIN_PATH='/auth/twitter/'
REACT_APP_POST_PATH='/publish/'
```

