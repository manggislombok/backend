const mongoose = require('mongoose')

const { MONGODB_URL, MONGODB_OPT } = require('./config')

const db = () => {
  mongoose.connect(MONGODB_URL, MONGODB_OPT)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function () {
    console.log('db connected!')
  })
}

module.exports = db
