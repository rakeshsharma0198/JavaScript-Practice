const express = require('express')
const app = express()
const ejs = require('ejs')
const morgan = require('morgan')


// ------------------------------------------------------
app.use('view engine', 'ejs')

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use(express.static(__dirname + '/views'))


// ------------------------------------------------------
app.get('/', (req, res) => {
  res.render('pages/00-home.ejs')
})

app.get('/1', (req, res) => {
  res.render('pages/01-aboutUs.ejs')
})


// ------------------------------------------------------
app.listen((process.env.PORT || 3000), (err) => {
  if(err){ throw err }
  console.log("\n Server Running.........................")
})
