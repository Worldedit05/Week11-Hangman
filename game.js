// This file will randomly select a word for the player

var wordObj = {
  words: ['desting','ghost','vex','taken', 'warlock'],
  message: {
    win: 'You win!',
    lose: 'Game Over.',
    warning: 'You have already guessed this letter: '
  },

  randomWord: function() {

    var answerWord = wordObj.words[Math.floor(Math.random() * wordObj.words.length)];

    return answerWord;
  }
};

module.exports = wordObj;
