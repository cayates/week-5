let guessedLetters = require("./guesses");
let mysteryWord = "";
const wordGuess = require("./guesses.js")
const correctLetters = require('./correctGuesses')
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n"); 
let remainingGuesses = "";


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

function checkLetterVsWord (guessedLetter){
    console.log('is this false', mysteryWord.includes(guessedLetter))
    if (mysteryWord.includes(guessedLetter)){
        console.log(wordGuess);
    for (let j = 0; j < mysteryWord.length; j++){
        if (mysteryWord[j] == guessedLetter){            
            let changeDashToLetter = mysteryWord[j]
            correctLetters[j] = {id: guessedLetter, display: changeDashToLetter}
            console.log('------------')
            console.log(correctLetters);
            console.log('------------')
        }
}
}
}

function guessCounter(){

}

// set variable to 8 guesses
// if mystery word does not contain wordguess, subtract one from the variable (use partial?)
// else do nothing

//  attempt with a do while loop

module.exports = { addLetter: addLetter, getMysteryWord: getMysteryWord, replaceWordWithDashes, checkLetterVsWord: checkLetterVsWord }








