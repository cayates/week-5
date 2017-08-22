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
console.log(mysteryWord)

function checkLetterVsWord(letter){
    for (let i = 0; i < mysteryWord.length; i++){
    if (mysteryWord.includes(wordGuess[i])){
        correctLetters.push(letter[i])
        console.log("success")
    } else {
        console.log("wrong")
    }
}}

module.exports = { addLetter: addLetter, getMysteryWord: getMysteryWord, checkLetterVsWord: checkLetterVsWord }