const express = require('express')
const router = express.Router()

const Pizzas = require('../models/customerModel')

router.get('/getallpizzas', async (req, res) => {
  try {
    const pizzas = await Pizzas.find({})
    res.send(pizzas)
  } catch (err) {
    return res.status(400).json({ message: err })
  }
})

module.exports = router
