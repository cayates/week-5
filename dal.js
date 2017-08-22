let guessedLetters = require("./guesses")

function addLetter (letter){
    return guessedLetters.filter(function(item){
        return item.guessbar
    })
}

module.exports = { addLetter: addLetter }