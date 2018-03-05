hangman.js
'use strict'

var hangmanAsObject = {
    turns: 7,
    lettersGuessed: //this would be the user's input and just keep appending to it 
    lettersAvailable: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w","x","y","z"],
    wordsForHangman: ["Nap", "quiet", "Please", "Piggie", "Gerald", "Pigeon", "Chirp", "Chop", "Doctor", "Hot dog"],
    wordSelection: wordsForHangman[Math.floor(Math.random() * wordsForHangman.length)],
    dashes: wordSelection.split(""),
    wins:  0,
    matchCount: 0
}


while (turns > 0) { 

    //This loop looks through the array for the letter that user input
     var matchCount = 0;
     //Matchcount is the number of times the letter was found in the array
     for (var j = 0; j++; j <=wordChoice.length){
         if (wordChoice[j] === p1) {
             matchCount++;
             //Show the letter from p1 in place of the dashes here - Need help writing this
         }
     }
    if  (matchCount === 0) {
        turns--;
        
 if(turns ===  6){
     //target2.innerHTML = 'The head appears'
     console.log(`head`);
     document.getElementById('target1').innerHTML = "Head Drawn. You have 6 guesses left";
   } else if (turns == 5) {
     //target2.innerHTML = 'The body appears'
     //display "head"
     document.getElementById('target2').innerHTML = "Body Drawn. You have 5 guesses left.";
     console.log(`body`);
   } else if(turns === 4) {
     document.getElementById('target3').innerHTML = "Arm Drawn. You have 4 guesses left.";
     //display "body"
     console.log(`arm`);
   } else if(turns === 3) {
     document.getElementById('target4').innerHTML = "Arm Drawn.You have 3 guesses left. ";
     //display "arm"
     console.log(`arm`);
   } else if (turns ===2 ){
    // target2.innerHTML = 'The leg appears'
    document.getElementById('target5').innerHTML = "Other Arm Drawn.You have 2 guesses left.";
     console.log(`other arm`);
   } else if(turns === 1 ){
     document.getElementById('target6').innerHTML = "Leg Drawn.You have 1 guess left.";
     console.log('leg');
   }  
     else if(turns === 0 ){
      //target2.innerHTML = 'Game over! Lets play again!'
      document.getElementById('target7').innerHTML = "Other Leg Drawn. Sorry, game over.";
         console.log('other leg');
   } 

$( "#PushButton" ).keypress(function() {
      console.log( "Handler for .keypress() called." );
    });
    $( "#other" ).click(function() {
      $( "#target" ).keypress();
    })
}
}
