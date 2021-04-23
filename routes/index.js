const router = require('express').Router()

router.use('/api', require('./booksRoutes.js'))

module.exports = router