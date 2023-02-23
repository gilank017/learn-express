
const Response = require("../helpers/Response")
const Token = require("../helpers/Jwt")

const JwtAuth = () => {
  return async ( req, res, next ) => {
    try {
      if (!req.headers.authorization) {
        throw {
          message: "UNAUTHORIZED ACCESS"
        }
      }
      const token = req.headers.authorization.split(' ')[1]
      const decoded = Token.verifyAuth(token)
      req.jwt = decoded
      next()
    } catch(error) {
      res.json(Response.unAuthorized())
    }
  }
}

module.exports = JwtAuth