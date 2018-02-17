const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')

mongoose.connect(keys.mongoURI, {
  user: keys.mongoUsername,
  pass: keys.mongoPassword
})

const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT)
