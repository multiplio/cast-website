function abortAvailable (self) {
  return !((typeof (self.Request) === 'function' && !self.Request.prototype.hasOwnProperty('signal')) || !self.AbortController)
}

function fetchWithTimeout (url, options, timeout) {
  return new Promise((resolve, reject) => {
    let controller = null
    let signal = null

    if (abortAvailable(window)) {
      controller = new window.AbortController()
      signal = controller.signal
    }

    // Set timeout timer
    let timer = setTimeout(
      () => {
        if (controller !== null) {
          controller.abort()
        }
      },
      timeout
    )

    fetch(url, { ...options, signal })
      .then(
        response => resolve(response),
        err => {
          if (err.name === 'AbortError') {
            reject(new Error('Request timed out'))
          }
          else {
            reject(err)
          }
        }
      )
      .finally(() => clearTimeout(timer))
  })
}

export default fetchWithTimeout
