const express = require('express')
const router = express.Router()
const addRegister = require('../controller/register')

router.post('/',addRegister)

module.exports = router