const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 3003

app.use(express.json())

const db = require('./db')

const customerModel = require('./models/customerModel')

const pizzasRoute = require('./routers/customerRouter')
const userRoute = require('./routers/userRouter')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
