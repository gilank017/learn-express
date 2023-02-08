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


app.listen(3000, () => {
  console.log("server started on port 3000") 
})