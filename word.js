// This file should contain all of the methods which will check the letters guessed versus the random word selected
var Letter = require('./letter.js');

var Word = function(answerWord, currentWord, userGuess) {
  this.answerWord = answerWord;
  this.currentWord = currentWord;
  this.userGuess = userGuess;
  this.checkLetter = function() {
    var result = "";
    for (var i = 0; i < this.answerWord.length; i++) {
      if (this.answerWord[i] === this.userGuess) {
        var newLet = new Letter(this.userGuess, true).letterConv();
        console.log(newLet);
        console.log(i);
        console.log(this.currentWord);
        console.log(result.push(newLet));
      }
      else {
        var newLet = new Letter(this.userGuess, false).letterConv();
          console.log(newLet);
          console.log(i);
          console.log(this.currentWord);
          console.log(result.push(newLet));
      }
    }
    return result;
  };
};

module.exports = Word;
