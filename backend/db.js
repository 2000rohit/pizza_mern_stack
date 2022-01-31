const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection

db.on('connected', () => {
  console.log('mongoDB connection successful')
})

db.on('error', () => {
  console.log('mongoDB connection error')
})

module.exports = mongoose
