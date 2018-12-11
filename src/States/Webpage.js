import { observable, action, decorate } from 'mobx'

class Webpage {
  constructor () {
    // observables
    this.accepted = false
  }

  // actions
  acceptCookies () {
    this.accepted = true
  }
}
decorate(Webpage, {
  // observables
  accepted: observable,

  // actions
  acceptCookies: action,
})
const webpage = new Webpage()
export default webpage

