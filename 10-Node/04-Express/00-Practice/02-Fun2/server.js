const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

app.use(morgan('dev'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/pages/index.html'))
})


app.listen((process.env.PORT || 5000), (err) => {
  if(err){ throw err }
  console.log("\n\n=========================\nServer Running....\n");
})
