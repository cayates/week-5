let guessedLetters = require("./guesses");
let mysteryWord = "";
const wordGuess = require("./guesses.js")
const correctLetters = require('./correctGuesses')
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

function addLetter (letter){
    return guessedLetters.filter(function(item){
        return item.guessbar
    })
}

function getMysteryWord (randomWord){
    mysteryWord = words[Math.floor(Math.random() * words.length)]
    return [...mysteryWord]
}
console.log(getMysteryWord())

function replaceWordWithDashes (dashes){
    if (correctLetters.length < mysteryWord.length){
        for (let i = 0; i < mysteryWord.length; i++){
            let oneLetter = mysteryWord[i]
            let newLetter = {id: oneLetter, display: "_"}
            correctLetters.push(newLetter);
        }
    }
    
}

function checkLetterVsWord(letter){
    if (mysteryWord.includes(wordGuess)){
        for (let j = 0; j < mysteryWord.length; j++){
            if (mysteryWord.includes(wordGuess[j])){
            let pushedLetter = mysteryWord[j]            
            let newLetter = {id: pushedLetter, display: pushedLetter}
            correctLetters.splice([j], 1, newLetter);
        }
    }
    }
}

// if word contains guessed letter, loop over the word length. if that mystery word contains that index (j), replace the display (dash) with that letter (j)

// currently this checks to see if it is contained.
// need another if statement that says if you are on that letter that is contained
// replace the dash with that letter

module.exports = { addLetter: addLetter, getMysteryWord: getMysteryWord, replaceWordWithDashes, checkLetterVsWord: checkLetterVsWord }