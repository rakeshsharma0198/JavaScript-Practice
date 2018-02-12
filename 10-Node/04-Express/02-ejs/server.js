const express = require('express')
const app = express()
const ejs = require('ejs')
const morgan = require('morgan')


// ------------------------------------------------------
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/views'));


// ------------------------------------------------------
app.get('/', (req, res) => {
    res.render('pages/00-home.ejs');
});

app.get('/1', (req, res) => {
  res.render('pages/01-aboutUs.ejs')
})

app.get('/2', (req, res) => {
  res.render('pages/02-contacttUs.ejs')
})


// ------------------------------------------------------
app.listen((process.env.PORT || 3000), (err) => {
  if(err){ throw err }
  console.log("\n\n=========================\nServer Running....\n");
})
