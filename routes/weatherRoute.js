const express = require('express')
const router = express.Router()

const weatherHandler = require('../modules/weather')
router.get('/weather', weatherHandler)

module.exports = router