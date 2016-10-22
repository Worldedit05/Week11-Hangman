// This is the main file. It will contain the logic of the app. Running it in Terminal/Bash will start the game

var Game = require('./game.js');
var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');

// var answer = Game.randomWord();
var answer = ['t','e','s','t']
var guessWord = Game.blankWord(answer);

function letterGuess () {
  inquirer.prompt([
    {
      type: 'input',
      name: 'letter',
      message: 'Guess a letter: '
    }

  ]).then(function (userInput) {
    var guess = userInput.letter;
    var word = new Word(answer, guessWord, guess);

    console.log(word.checkLetter());

    if (word.checkLetter() != answer) {

      letterGuess();
    }
    else
    {
      console.log("Game over");
    }
  });
}
letterGuess();
