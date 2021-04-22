const router = require('express').Router()

const { getFarmer, getFarmerById } = require('./get')
const { postFarmer } = require('./post')

router.get('/', getFarmer)
router.get('/:id', getFarmerById)

router.post('/', postFarmer)

module.exports = router
