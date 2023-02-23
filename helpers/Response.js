class Response {
  constructor() {
    this.status = true
    this.message = {}
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

  static unAuthorized () {
    let response = new Response()
    response.setStatus(false)
    response.setMessage("Unauthorized access !")
    return response
  }
}

module.exports = Response