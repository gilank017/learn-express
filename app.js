const dotenv = require("dotenv")
const express = require("express")
const bodyParser = require("body-parser")
const connect = require('./services/connection')

const env = dotenv.config().parsed

const app = express()
// untuk body json
app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawBody = buf
  }
}))
// untuk body urlFormEncoded
app.use(bodyParser.urlencoded({
  extended: false,
  verify: (req, res, buf) => {
    req.rawBody = buf
  }
}))

// koneksi mongodb
connect()


// route
app.use("/", require("./routes/public"))


// handle route error
app.use(function (req, res, next) {
  res.status(404).json({status: false, message: "Sorry, We don't know the endpoint target"})
})

app.listen(env.APP_PORT, () => {
  console.log(`server started on port ${env.APP_PORT}`) 
})