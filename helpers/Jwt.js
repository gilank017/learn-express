const jsonwebtoken = require("jsonwebtoken")
const dotenv = require("dotenv")

const env = dotenv.config().parsed

const Token = {
  generate: async (payload) => {
    return await jsonwebtoken.sign(payload, env.JWT_ACCESS_TOKEN_SECRET, {expiresIn: env.JWT_ACCESS_TOKEN_EXPIRED})
  },
  refresh: async (payload) => {
    return await jsonwebtoken.sign(payload, env.JWT_REFRESH_TOKEN_SECRET, {expiresIn: env.JWT_REFRESH_TOKEN_EXPIRED})
  },
  verifyAuth: async (payload) => {
    return await jsonwebtoken.verify(payload, env.JWT_ACCESS_TOKEN_SECRET)
  },
  verify: async (payload) => {
    return await jsonwebtoken.verify(payload, env.JWT_REFRESH_TOKEN_SECRET) 
  }
  
}

module.exports = Token