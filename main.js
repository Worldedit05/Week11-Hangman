// This is the main file. It will contain the logic of the app. Running it in Terminal/Bash will start the game

var Game = require('./game.js');
var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');
var numGuesses = 10;
var guessedLetters = [];

var answer = Game.randomWord();
// var answer = ['t','e','s','t'];
var guessWord = Game.blankWord(answer);

console.log("\nWelcome to Hangman!\n\nHere is your current word: " + guessWord.join(" ") + "\n");

function letterGuess () {
  inquirer.prompt([
    {
      type: 'input',
      name: 'letter',
      message: 'Guess a letter: '
    }

  ]).then(function (userInput) {

    var guess = userInput.letter;

    // Checking to see if letter has already been guessed
    if (guessedLetters.indexOf(guess) !== -1){
      console.log("\nYou've already guessed this letter! Please guess a different letter.\n");
      return letterGuess();
    }
    numGuesses--;
    guessedLetters.push(guess);

    var word = new Word(answer, guessWord, guess);

    // console.log(word.checkLetter());

    guessWord = word.checkLetter();

    console.log("\n\nHere is your current word: " + guessWord.join(" "));
    console.log("\nGuessed Letters: " + guessedLetters.join());
    console.log("Number of guesses left: " + numGuesses + "\n");

    if (guessWord.join("") === answer.join("")) {
      console.log("You win!\n\n");
    }
    else if (numGuesses === 0) {
      console.log("The word was: " + answer.join("") +  "\n\nYou lose. Please play again!\n\n");
    }
    else
    {
      letterGuess();
    }
  });
}
letterGuess();
