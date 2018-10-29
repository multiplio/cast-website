import { observable, action, decorate } from "mobx"

class User {
  displayName;
  pictureLink;

  constructor() {
    this.displayName = null;
    this.pictureLink = null;
  }

  setUser(name, link) {
    this.displayName = name;
    this.pictureLink = link;
  }
}
decorate(User, {
  displayName: observable,
  pictureLink: observable,

  setUser: action,
})

const user = new User();
export default user;
