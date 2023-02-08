const express = require("express")

const public = express.Router()

public.get('/', (req, res) => {
  res.json({title: `hello ${req.query.name}`})
})
public.post('/', (req, res) => {
  res.json({title: `hello ${req.query.name}`})
})

module.exports = public