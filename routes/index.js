const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const { request } = require('express')

// @desc    Login/Landing page
// @route   GET /
//router.get('/', ensureGuest, (req, res) => {
    //not logged in User
//})
router.get('/', (req, res) => {
    //not logged in User
    res.send("Hello user")
    console.log(req.user)
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
     // request.user is aktual User
    //route just available if user is logged in
  } catch (err) {
    console.error(err)
    //show error
  }
})

module.exports = router