class Response {
  constructor() {
    this.status = true
    this.message = {}
    this.code = null
  }

  setStatus (status) {
    this.status = status
  }

  setMessage (message) {
    this.message = message
  }

  setData (data, message = "Success") {
    this.data = data
    if (this.status) {
      this.message = message
    } else {
      this.message = 'Failed'
    }
  }

  setCode (code) {
    this.code = code
  }
}

module.exports = Response