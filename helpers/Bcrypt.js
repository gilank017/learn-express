const bcrypt = require("bcrypt")
const saltRounds = 10

class Bcrypt {
  static async encrypt (val) {
    let hash
    await new Promise((resolve, reject) => {
      bcrypt.hash(val, saltRounds).then((hashVal) => {
        hash = hashVal
        resolve()
      })
    })
    return hash
  }

  static async check(val, hashVal) {
    let isSame
    await new Promise((resolve, reject) => {
      bcrypt.compare(val, hashVal).then((isSameValue) => {
        isSame = isSameValue
        resolve()
      })
    })
    return isSame
  }
}

module.exports = Bcrypt