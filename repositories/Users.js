const User = require("../models/User")
const Bcrypt = require("../helpers/Bcrypt")
const Jwt = require("../helpers/Jwt")

const Users = {
  insertNewUser: async (user) => {
    const body = {
      name: user.name,
      email: user.email,
      password: await Bcrypt.encrypt(user.password)
    }
    let response = await User.create(body)
    if (response) {
      return {
        name: response.name,
        email: response.email,
        status: response.status
      }
    }
    throw {
      reason: ['Internal server error']
    }
  },
  login: async (user) => {
    let response = await User.findOne({ email: user.email })
    if (response) {
      let validatePassword = await Bcrypt.check(user.password, response.password)
      if (validatePassword) {
        let accessToken = await Jwt.generate({id: response._id})
        let refreshToken = await Jwt.refresh({id: response._id})
        return {
          name: response.name,
          email: response.email,
          status: response.status,
          token: accessToken,
          refresh_token: refreshToken
        }
      }
      throw {
        message: "Invalid Password"
      }
    }
    throw {
      message: "Email not registered"
    }
  },
  verifyToken: async (payload) => {
    if (payload) {
      let verify = await Jwt.verify(payload)
      if (verify) {
        let token = { id: verify.id }
        let accessToken = await Jwt.generate(token)
        let refreshToken = await Jwt.refresh(token)
        return {
          accessToken,
          refreshToken
        }
      }
      throw {
        message: "Unauthorized"
      }
    }
    throw {
      message: "Refresh token is required"
    }
  }
}

module.exports = Users