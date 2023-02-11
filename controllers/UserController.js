const Response = require("../helpers/Response")
const User = require("../models/User")

class UserController {
  async register(req, res) {
    let response = new Response
    try {
      const user = await User.create(req.body)
      response.setCode(200)
      response.setData(user)
      response.setMessage("User Created Successfully")
    } catch (error) {
      response.setCode(error.code || 500)
      response.setStatus(false)
      response.setData(error.message)
    }
    res.json(response)
  }
}

module.exports = new UserController