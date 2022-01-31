const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: { type: 'string', require },
    email: { type: 'string', require },
    password: { type: 'string', require },
    isAdmin: { type: 'boolean', require, default: false },
  },
  {
    timestamps: true,
  }
)

const customerModel = mongoose.model('User', userSchema)

module.exports = customerModel
