const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')


// ---------------------------------------------
app.use(morgan('dev'))



// ---------------------------------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/01-home.html'))
})
