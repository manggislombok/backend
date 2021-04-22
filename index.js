const express = require('express')
// const cors = require('cors')

const db = require('./db')
const routes = require('./routes')

const { PORT } = require('./config')

db()

const app = express()

app.use(express.json())
app.use(routes)

app.listen(PORT, function () {
  console.log(this.address().port)
})
