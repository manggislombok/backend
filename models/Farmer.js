const { Schema, model } = require('mongoose')

const Harvest = new Schema({
  quantity: {
    type: Number,
    min: 0,
    max: 999999999,
    required: true
  },
  quantityUnit: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 255,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    max: 999999999,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, { _id: false })

const FarmerSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 255,
    required: true
  },
  harvestType: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 255,
    required: true
  },
  coordinates: {
    type: [Number, Number],
    maxlength: 2,
    required: true
  },
  area: {
    type: Number,
    min: 0,
    max: 999999999,
    required: true
  },
  currentHarvest: {
    type: Harvest
  },
  nextHarvest: {
    type: Harvest
  }
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  }
})

module.exports = model('Farmer', FarmerSchema)
