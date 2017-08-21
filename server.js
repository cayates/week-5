// setting up basics from modules that were installed 

const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const dal = require('./dal')
const app = express()

// setting up mustache basics

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// setting up body parser 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// set up public folder for css  

app.use(express.static('public'));

// setting up express session

app.use(
    session({
      secret: 'this is cool',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: null }
    })
  )

  app.use(function (req, res, next) {
    if (req.session.usr) {
      req.isAuthenticated = true
    } else {
      req.isAuthenticated = false
    }
    console.log(req.isAuthenticated, 'session')
    next()
  })

// setting up port to listen on 

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('App is running on 3000.')
})

// routes 

app.get('/', function (req, res) {
    res.render('home')
  })

  app.get('/home', function (req, res){
      res.render('home')
  })

app.post('/', function (req, res){
    res.redirect('./home')
})
