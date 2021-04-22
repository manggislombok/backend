const { isValid } = require('mongoose').Types.ObjectId

const { Farmer } = require('../../models')

const getFarmer = async (req, res, next) => {
  try {
    const farmers = await Farmer.find()

    res.status(200).json({
      success: true,
      total: farmers.length,
      farmers
    })
  } catch (e) {
    next(e)
  }
}

const getFarmerById = async ({ params }, res, next) => {
  try {
    if (!isValid(params.id)) {
      res.status(200).json({
        invalid: 'Farmer\'s Id is invalid!'
      })
    }

    const farmer = await Farmer.findOne({ _id: params.id })

    res.status(200).json({
      success: true,
      farmer
    })
  } catch (e) {
    next(e)
  }
}

module.exports = { getFarmer, getFarmerById }
