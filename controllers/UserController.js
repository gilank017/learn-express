const Response = require("../helpers/Response")
const UserValidator = require("../validators/UserValidator")
const Users = require("../repositories/Users")

class UserController {
  async register(req, res) {
    let response = new Response
    try {
      let requestData = await UserValidator.CheckRegister(req.body)
      let createUser = await Users.insertNewUser(requestData)
      response.setData(createUser)
      response.setMessage("User Created Successfully")
    } catch (error) {
      response.setStatus(false)
      response.setData(error)
    }
    res.json(response)
  }

  async login(req, res) {
    let response = new Response
    try {
      let requestData = await UserValidator.CheckLogin(req.body)
      let dataLogin = await Users.login(requestData)
      response.setData(dataLogin)
      response.setMessage("Login Successfully")
    } catch(error) {
      response.setStatus(false)
      response.setData(error)
    }
    res.json(response)
  }
}

module.exports = new UserController