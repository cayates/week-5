
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const dal = require('./dal')
const app = express()
const wordGuess = require("./guesses.js")
const fs = require('fs')
const correctLetters = require('./correctGuesses.js')

// setting up mustache basics

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// middleware 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
    session({
      secret: 'this is cool',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: null },
      alert: ''
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

// set up public folder for css

app.use(express.static('public'));

// setting up port to listen on 

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('App is running on 3000, bro ninja.')
})

// routes 

app.get('/', function (req, res) {
    res.render('home', {wordGuess: wordGuess, correctLetters: correctLetters, getGuesses: dal.getGuesses})
  })

  app.get('/home', function (req, res){
      dal.replaceWordWithDashes();
      res.render('home', {wordGuess: wordGuess, correctLetters: correctLetters, getGuesses: dal.getGuesses}) 
  })

  app.get('/loser', function (req, res){
    res.render('loser')
  })
  
  app.get('/winner', function (req, res) {
    res.render('winner')
  })

  app.post('/', function (req, res){
    const guessedLetter = req.body.guessbar;
      wordGuess.push(guessedLetter)
      dal.addLetter(guessedLetter)    
      dal.checkLetterVsWord(guessedLetter)
      dal.switchAndCounter(guessedLetter)
     if( dal.winOrLose(guessedLetter) ) {
        res.redirect('./home') 
     } else {
        res.redirect('/loser')
    }
  })



