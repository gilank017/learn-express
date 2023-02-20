const User = require("../models/User")
const Bcrypt = require("../helpers/Bcrypt")

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
        return response
      }
      throw {
        message: "Invalid Password"
      }
    }
    throw {
      message: "Email not registered"
    }
  }
}

module.exports = Users