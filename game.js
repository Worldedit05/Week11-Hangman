// This file will randomly select a word for the player

var wordObj = {
  words: ['destiny','ghost','vex','taken', 'warlock', 'banshee'],

  randomWord: function() {

    var answerWord = wordObj.words[Math.floor(Math.random() * wordObj.words.length)];

    var answerArray = [];

    for (var i = 0; i < answerWord.length; i++) {

        answerArray.push(answerWord[i]);

    }

    return answerArray;
  },

  blankWord: function(answerWord) {

        var blankCharacter = [];

        for (var i = 0; i < answerWord.length; i++) {

            blankCharacter.push("_");

        }

        return blankCharacter;
    }
};

module.exports = wordObj;
