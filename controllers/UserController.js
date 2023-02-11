const Response = require("../helpers/Response")
const UserValidator = require("../validators/UserValidator")
const User = require("../models/User")

class UserController {
  async register(req, res) {
    let response = new Response
    try {
      let requestData = await UserValidator.CheckRegister(req.body)
      const user = await User.create(requestData)
      response.setData(user)
      response.setMessage("User Created Successfully")
    } catch (error) {
      response.setStatus(false)
      response.setData(error)
    }
    res.json(response)
  }
}

module.exports = new UserController