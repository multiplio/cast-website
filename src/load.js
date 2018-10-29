import user from './States/User'

function loadUser() {
  fetch(process.env.REACT_APP_GET_IDENTITY_PATH)
    .then(response => response.json())
    .then(json => {console.log(json); return json;})
    .then(
      json => user.setUser(json.displayName, null)
    )
    .catch(
      err => console.error(`Could not get user : ${err}`)
    )
}

export {
  loadUser,
};
