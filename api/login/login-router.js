const express = require('express');
const Login = require('./login-model');
const {validateLogin} = require('./login-middleware');

const router = express.Router();

router.post('/', validateLogin, (req, res) => {
  res.status(200).json({message: `Welcome, ${req.validLogin.username}! We're glad to have you back.`})
})

module.exports = router;