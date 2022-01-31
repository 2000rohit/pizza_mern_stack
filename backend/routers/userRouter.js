const express = require('express')
const router = express.Router()

const User = require('../models/userModel')

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  const newUser = new User({ name, email, password })
  try {
    newUser.save()
    res.send('user registered successfull')
  } catch (err) {
    return res.status(404).json({ message: err })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.find({ email, password })
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      }
      res.send(currentUser)
    } else {
      return res.status(404).json({ message: 'User Login Failed' })
    }
  } catch (err) {
    return res.status(404).json({ message: err })
  }
})

module.exports = router
