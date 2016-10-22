// This file should contain all of the methods which will check the letters guessed versus the random word selected
var Letter = require('./letter.js');
var result = [];
var Word = function(answerWord, currentWord, userGuess) {
    this.answerWord = answerWord;
    this.currentWord = currentWord;
    this.userGuess = userGuess;
    this.checkLetter = function() {

        for (var i = 0; i < this.answerWord.length; i++) {
            if (this.currentWord[i] !== "_") {
                var newLet = new Letter(this.currentWord[i], true).letterConv();
                currentWord.splice(i, 1, newLet);
            } else if (this.answerWord[i] === this.userGuess) {
                var newLet = new Letter(this.userGuess, true).letterConv();
                console.log("\n\n'" + newLet + "' is correct!");
                currentWord.splice(i, 1, newLet);
            } else {
                var newLet = new Letter(this.userGuess, false).letterConv();
                currentWord.splice(i, 1, newLet);
            }
        }
        return currentWord;
    };
};

module.exports = Word;
