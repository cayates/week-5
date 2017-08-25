let guessedLetters = require("./guesses");
let mysteryWord = "";
const wordGuess = require("./guesses.js");
const correctLetters = require('./correctGuesses');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n"); 
let guesses = 8;
let winState = true;

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
    if (mysteryWord.includes(guessedLetter)){
    for (let j = 0; j < mysteryWord.length; j++){
        if (mysteryWord[j] == guessedLetter){            
            let changeDashToLetter = mysteryWord[j]
            correctLetters[j] = {id: guessedLetter, display: changeDashToLetter}
        }
}
}
}

function getGuesses(){
    return guesses;
}

// this contains the functions to switch the correctness from false to true if the letter is contained

function switchAndCounter(guessedLetter){
    let isCorrect = false         
    for (let k = 0; k < mysteryWord.length; k++){
        if (mysteryWord[k] === guessedLetter){
            isCorrect = true;
        }
    }
    if (isCorrect === false){
        guesses -=1;
        console.log(isCorrect)                        
    }
    }

// function to put the correct page based off of guesses remaining

function winOrLose(guessedLetter){
    let winState = true
    if (guesses === 0){
        winState = false
    } else {
        winState = true
    }
    console.log(winState)
}

module.exports = { addLetter: addLetter, getMysteryWord: getMysteryWord, replaceWordWithDashes: replaceWordWithDashes, checkLetterVsWord: checkLetterVsWord, switchAndCounter: switchAndCounter, getGuesses: getGuesses, winOrLose: winOrLose }








