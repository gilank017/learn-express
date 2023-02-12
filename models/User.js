const user = require("mongoose")

const userSchema = new user.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
    required: true
  },
  createdAt: {
    type: Number
  },
  updateAt: {
    type: Number
  }
},
{
  timestamps: {
    currentTime: () => Math.floor(Date.now() / 1000)
  }
})

module.exports = user.model("Users", userSchema)