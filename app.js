const express = require("express")
const bodyParser = require("body-parser")


const app = express()
// untuk body json
app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawBody = buf
  }
}))
//untuk body urlFormEncoded
app.use(bodyParser.urlencoded({
  extended: false,
  verify: (req, res, buf) => {
    req.rawBody = buf
  }
}))


//route
app.use("/", require("./routes/public"))


//handle route error
app.use(function (req, res, next) {
  res.status(404).json({status: false, message: "Sorry, We don't know the endpoint target"})
})


app.listen(3000, () => {
  console.log("server started on port 3000") 
})