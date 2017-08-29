let guessedLetters = require("./guesses");
let mysteryWord = "";
const wordGuess = require("./guesses.js");
const correctLetters = require('./correctGuesses');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n"); 
let guesses = 8;
let winState = true;
let winnerWinner = true 


function addLetter (letter){
    return guessedLetters.filter(function(item){
        return item.guessbar;
    })
}

function getMysteryWord (randomWord){
    mysteryWord = words[Math.floor(Math.random() * words.length)]
    console.log(mysteryWord)
    return [...mysteryWord]
}
console.log(getMysteryWord())

function replaceWordWithDashes (dashes){
    if (correctLetters.length < mysteryWord.length){
        for (let i = 0; i < mysteryWord.length; i++){
            let newLetter = "_"
            correctLetters.push(newLetter);
        }
    }   
}

function checkLetterVsWord (guessedLetter){
    if (mysteryWord.includes(guessedLetter)){
        let winnerStatus = false
    for (let j = 0; j < mysteryWord.length; j++){
        if (mysteryWord[j] == guessedLetter){            
            let changeDashToLetter = mysteryWord[j]
            correctLetters[j] = changeDashToLetter
        }
        }
        }
        }

function getGuesses(){
    return guesses;
}

function switchAndCounter(guessedLetter){
    let isCorrect = false         
    for (let k = 0; k < mysteryWord.length; k++){
        if (mysteryWord[k] === guessedLetter){
            isCorrect = true;
        }
    }
    if (isCorrect === false){
        guesses -=1;
    }
    }

function winOrLose (guessedLetter) {
    let winState = true
    if (guesses === 0 ) {
      winState = false
    } else {
      winState = true
    }
    return winState
  }

function winner(guessedLetter){
    console.log(correctLetters)
    let arrayToWord = correctLetters.join("")
    let winnerStatus = true
    if (arrayToWord === mysteryWord){
            winnerStatus = true
        } else {
            winnerStatus = false
        }
        return winnerStatus
    }   

module.exports = { addLetter: addLetter, getMysteryWord: getMysteryWord, replaceWordWithDashes: replaceWordWithDashes, checkLetterVsWord: checkLetterVsWord, switchAndCounter: switchAndCounter, getGuesses: getGuesses, winOrLose: winOrLose, winner: winner }

// mysteryWord <-- this is the actual word
// correctLetter <-- this is the array that contains display
