import { observable, action, decorate } from 'mobx'
import Cookies from 'universal-cookie'

const cookiesCookie = 'cookies-accepted'

class Webpage {
  constructor () {
    this.cookies = new Cookies()

    // observables
    this.accepted = this.cookies.get(cookiesCookie) || false
  }

  // actions
  acceptCookies () {
    this.cookies.set(cookiesCookie, 'true', { path: '/' })
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

