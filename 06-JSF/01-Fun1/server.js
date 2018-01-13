console.log("\n\n\nHello from the code in: server.js")

const express = require('express')
const app = express()
const morgan = require('morgan')
const ejs = require('ejs')
const fetch = require('node-fetch')
const myURL = 'https://swapi.co/api/people/1/'

const getData = async (myURL) => {
  const info = await fetch(myURL)
  return await info.json()
}


app.set('view enginge', 'ejs')
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use(express.static(__dirname + '/views'))
app.use(morgan('dev'))

app.get('/', function(req, res){
  res.render('pages/00-index.ejs');
})

// const data = fetch('https://swapi.co/api/people/1/')
//     .then(function(res) { return res.json() })
//     .then(function(json) { console.log(json) })

const data = getData(myURL)

console.log("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
console.log(data)

// setTimeout( () => {
//   console.log("the info is: ==================================");
//   console.log(data)
// }, 3000 )

app.listen((process.env.PORT || 5000), function(err){
  if(err){ throw err; }
  console.log("Server Up & Running .....");
})
