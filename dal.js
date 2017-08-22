let guessedLetters = require("./guesses");
let mysteryWord = "";
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

module.exports = { addLetter: addLetter, getMysteryWord: getMysteryWord }