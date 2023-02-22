const express = require("express")
const UserController = require("../controllers/UserController")

const public = express.Router()

// Route dari Controller
public.post('/register', UserController.register)
public.post('/login', UserController.login)
public.post('/refresh-token', UserController.refreshAuthentification)

module.exports = public