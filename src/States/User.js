import { observable, action, computed, decorate } from 'mobx'

class User {
  constructor () {
    // observables
    this.loaded = false
    this.displayName = null
    this.pictureLink = null

    // load
    this.loadUser()
  }

  // computed
  get loggedIn () {
    return (this.loaded === true && this.displayName !== null)
  }

  // actions
  setUser (name, link) {
    this.loaded = true
    this.displayName = name
    this.pictureLink = link
  }
  loadUser () {
    fetch(process.env.REACT_APP_GET_IDENTITY_PATH)
      .then(response =>
        response.json()
      )
      .then(json =>
        this.setUser(
          json.displayName || null,
          json.profileImageUrl || null
        )
      )
      .catch(_ =>
        this.setUser(null, null)
      )
  }
}
decorate(User, {
  // observables
  loaded: observable,
  displayName: observable,
  pictureLink: observable,

  // computed
  loggedIn: computed,

  // actions
  setUser: action,
  loadUser: action,
})
const user = new User()
export default user

