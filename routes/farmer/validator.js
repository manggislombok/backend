const { HARVEST_TYPE, HARVEST_UNIT } = require('../../config')

const validator = (body = {}) => {
  const valid = {}

  // name
  const { name } = body
  if (name === undefined) return ['name is required!']
  if (typeof name !== 'string') return ['name type must be a string!']
  if (name.trim().length < 3 || name.trim().length > 255) return ['name length must be 3 to 255 characters!']
  valid.name = name.trim()

  // harvestType
  const { harvestType } = body
  if (harvestType === undefined) return ['harvestType is required!']
  if (typeof harvestType !== 'string') return ['harvestType type must be a string!']
  if (!HARVEST_TYPE.includes(harvestType.trim())) return ['harvestType must be one of ' + HARVEST_TYPE + '!']
  valid.harvestType = harvestType.trim()

  // coordinates
  const { coordinates } = body
  if (coordinates === undefined) return ['coordinates is required!']
  if (!Array.isArray(coordinates)) return ['coordinates type must be an array!']
  if (coordinates.length !== 2) return ['coordinates length must be 2 value!']
  if (Number(coordinates[0]) === isNaN) return ['latitude (coordinates[0]) must be a number!']
  if (Number(coordinates[1]) === isNaN) return ['longitude (coordinates[1]) must be a number!']
  valid.coordinates = [Number(coordinates[0]), Number(coordinates[1])]

  // area
  const { area } = body
  if (area === undefined) return ['area is required!']
  if (Number(area) === isNaN) return ['area type must be a number!']
  if (Number(area) < 0 || Number(area) > 999999999) return ['area must between 0 to 999999999!']
  valid.area = Number(area)

  // ===

  // currentHarvest
  const { currentHarvest } = body
  if (currentHarvest === undefined) return ['currentHarvest is required!']
  if (typeof currentHarvest !== 'object' || currentHarvest === null || Array.isArray(currentHarvest)) return ['currentHarvest type must be an object!']
  valid.currentHarvest = {}

  // currentHarvest.quantity
  if (currentHarvest.quantity === undefined) return ['currentHarvest.quantity is required!']
  if (Number(currentHarvest.quantity) === isNaN) return ['currentHarvest.quantity type must be number!']
  if (Number(currentHarvest.quantity) < 0 || Number(currentHarvest.quantity) > 999999999) return ['currentHarvest.quantity must between 0 to 999999999!']
  valid.currentHarvest.quantity = Number(currentHarvest.quantity)

  // currentHarvest.quantityUnit
  if (currentHarvest.quantityUnit === undefined) return ['currentHarvest.quantityUnit is required!']
  if (typeof currentHarvest.quantityUnit !== 'string') return ['currentHarvest.quantityUnit type must be string!']
  if (!HARVEST_UNIT.includes(currentHarvest.quantityUnit.trim())) return ['currentHarvest.quantityUnit must be one of ' + HARVEST_UNIT + '!']
  valid.currentHarvest.quantityUnit = currentHarvest.quantityUnit.trim()

  // currentHarvest.price
  if (currentHarvest.price === undefined) return ['currentHarvest.price is required!']
  if (Number(currentHarvest.price) === isNaN) return ['currentHarvest.price type must be number!']
  if (Number(currentHarvest.price) < 0 || Number(currentHarvest.price) > 999999999) return ['currentHarvest.price must between 0 to 999999999!']
  valid.currentHarvest.price = Number(currentHarvest.price)

  // currentHarvest.date
  if (currentHarvest.date === undefined) return ['currentHarvest.date is required!']
  if (typeof currentHarvest.date !== 'string') return ['currentHarvest.date type must be string!']
  if (!new Date(currentHarvest.date)) return ['currentHarvest.date must be a valid date!']
  valid.currentHarvest.date = new Date(currentHarvest.date)

  // ===

  // nextHarvest
  const { nextHarvest } = body
  if (nextHarvest === undefined) return ['nextHarvest is required!']
  if (typeof nextHarvest !== 'object' || nextHarvest === null || Array.isArray(nextHarvest)) return ['nextHarvest type must be an object!']
  valid.nextHarvest = {}

  // nextHarvest.quantity
  if (nextHarvest.quantity === undefined) return ['nextHarvest.quantity is required!']
  if (Number(nextHarvest.quantity) === isNaN) return ['nextHarvest.quantity type must be number!']
  if (Number(nextHarvest.quantity) < 0 || Number(nextHarvest.quantity) > 999999999) return ['nextHarvest.quantity must between 0 to 999999999!']
  valid.nextHarvest.quantity = Number(nextHarvest.quantity)

  // nextHarvest.quantityUnit
  if (nextHarvest.quantityUnit === undefined) return ['nextHarvest.quantityUnit is required!']
  if (typeof nextHarvest.quantityUnit !== 'string') return ['nextHarvest.quantityUnit type must be string!']
  if (!HARVEST_UNIT.includes(nextHarvest.quantityUnit.trim())) return ['nextHarvest.quantityUnit must be one of ' + HARVEST_UNIT + '!']
  valid.nextHarvest.quantityUnit = nextHarvest.quantityUnit.trim()

  // nextHarvest.price
  if (nextHarvest.price === undefined) return ['nextHarvest.price is required!']
  if (Number(nextHarvest.price) === isNaN) return ['nextHarvest.price type must be number!']
  if (Number(nextHarvest.price) < 0 || Number(nextHarvest.price) > 999999999) return ['nextHarvest.price must between 0 to 999999999!']
  valid.nextHarvest.price = Number(nextHarvest.price)

  // nextHarvest.date
  if (nextHarvest.date === undefined) return ['nextHarvest.date is required!']
  if (typeof nextHarvest.date !== 'string') return ['nextHarvest.date type must be string!']
  if (!new Date(nextHarvest.date)) return ['nextHarvest.date must be a valid date!']
  valid.nextHarvest.date = new Date(nextHarvest.date)

  return [false, valid]
}

module.exports = validator
