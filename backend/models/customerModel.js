const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
  {
    name: { type: 'string', require },
    varients: [],
    prices: [],
    category: { type: 'string', require },
    image: { type: 'string', require },
    description: { type: 'string', require },
  },
  {
    timestamps: true,
  }
)

const customerModel = mongoose.model('Customer', customerSchema)

module.exports = customerModel
