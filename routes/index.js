const router = require('express').Router()

const farmer = require('./farmer')

router.use('/farmer', farmer)

// export module
module.exports = router
