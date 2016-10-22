// This file should control whether or not a letter appears as a "_" or as itself on-screen

var Letter = function(character, check) {

  this.character = character;
  this.check = check;
  this.letterConv = function() {
    if (check) {

      return this.character;

    } else {

      return "_";

    }
  };

};

module.exports = Letter;
