const { Farmer } = require('../../models')
const validator = require('./validator')

const postFarmer = async ({ body }, res, next) => {
  try {
    const [invalid, validFarmer] = validator(body)
    if (invalid) {
      res.status(200).json({
        invalid
      })
    }

    const newFarmer = new Farmer(validFarmer)
    const savedFarmer = await newFarmer.save()

    res.status(200).json({
      success: true,
      savedFarmer
    })
  } catch (e) {
    next(e)
  }
}

module.exports = { postFarmer }
