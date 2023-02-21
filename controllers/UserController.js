const Response = require("../helpers/Response")
const UserValidator = require("../validators/UserValidator")
const Users = require("../repositories/Users")
const dotenv = require("dotenv")
const url = require("url")


const env = dotenv.config().parsed
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
      // let domain = '.'+url.parse(env.FRONTEND_URL).hostname.replace(/^[^.]+\./g, "")
      res.cookie('token',dataLogin.token, { maxAge: 1000*60*60*24*7, httpOnly: true, secure: true, path: '/'});
      // res.cookie('token', 'expired', { maxAge: 0, httpOnly: true, secure: true, path: '/', domain: 'academy' + domain });
      // res.cookie('token', 'expired', { maxAge: 0, httpOnly: true, secure: true, path: '/', domain: 'www' + domain });
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