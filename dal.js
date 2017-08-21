let guessedLetters = require("./guesses")

function addLetter (letter){
    return guessedLetters.filter(function(item){
        return item.letter
    })
}

module.exports = {
    addLetter
  }