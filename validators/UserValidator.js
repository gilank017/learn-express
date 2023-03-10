const Validator = require("./Validator")
const User = require("../models/User")

class UserValidator {
  static async CheckRegister(userData) {
    let model = await User
    let rules = [
      {
        key: "name",
        value: userData.name,
        rules: ['required']
      },
      {
        key: "email",
        value: userData.email,
        model: model,
        rules:  ['lowercase', 'trim', 'required', 'email', 'email-exist']
      },
      {
        key: "password",
        value: userData.password,
        rules: ['required']
      },
    ]
    return await Validator.check(rules)
  }

  static async CheckLogin(userData) {
    let model = await User
    let rules = [
      {
        key: "email",
        value: userData.email,
        model: model,
        rules:  ['lowercase', 'trim', 'required', 'email']
      },
      {
        key: "password",
        value: userData.password,
        rules: ['required']
      },
    ]
    return await Validator.check(rules)
  }
}

module.exports = UserValidator