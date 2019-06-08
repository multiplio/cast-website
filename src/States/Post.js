const contentKey = 'post-content'

class Post {
  getContent () {
    try {
      return localStorage.getItem(contentKey) || ''
    }
    catch (exception) {
      return ''
    }
  }
  setContent (content) {
    try {
      localStorage.setItem(contentKey, content)
      return true
    }
    catch (setException) {
      try {
        localStorage.removeItem(contentKey)
        return false
      }
      catch (removeException) {
        return false
      }
    }
  }
}
const post = new Post()
export default post

