hangman.js
'use strict'

var hangmanAsObject = {
    turns: 7;
    lettersGuessed: //this would be the user's input and just keep appending to it 
    lettersAvailable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w","x","y","z"];
    wordsForHangman = ["Nap", "quiet", "Please", "Piggie", "Gerald", "Pigeon", "Chirp", "Chop", "Doctor", "Hot dog"];
    wordSelection = wordsForHangman[Math.floor(Math.random() * wordsForHangman.length)];
    dashes = wordSelection.split("");
    wins = 
}

$( "#PushButton" ).keypress(function() {
      console.log( "Handler for .keypress() called." );
    });
    $( "#other" ).click(function() {
      $( "#target" ).keypress();
    });