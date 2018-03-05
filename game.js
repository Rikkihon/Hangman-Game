'use strict'
var p1 = prompt('Enter a letter').toLowerCase();

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w","x","y","z"];
const guess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w","x","y","z"];

//This is the array of word to pick from a book
const wordsForHangman = ["Nap", "quiet", "Please", "Piggie", "Gerald", "Pigeon", "Chirp", "Chop", "Doctor", "Hot dog"];
//This randomly chooses the element from the array
const wordSelection = wordsForHangman[Math.floor(Math.random() * wordsForHangman.length)];
console.log = wordSelection;
//Then we will count the number of characters in the string selected from the array
const wordChoice = wordSelection.split("");
console.log = wordChoice.length;
const dashes = wordChoice.length;
function letterEntry(){
var n = 0;

for (n = 0; n++; n <=dashes ){
  //this should draw the dashes
  n++;
  document.getElementById('dashes').innerHTML = "_";
  console.log = n;
}

for (i = 0; i++; i<= 10) {
  var p1 = prompt('Enter a letter').toLowerCase();
  document.getElementById('other').innerHTML = p1;
}
 
}
//need to decide how to declare the number of wins
const wins = 5; 
document.getElementById('wins').innerHTML = wins;

while (turns > 7) {
  var p1 = prompt('Enter a letter').toLowerCase();
  document.getElementById('other').innerHTML = p1;
  }
  if (turns <=7) {
  document.getElementById('wins').innerHTML = "Game Over";
  }

var turns = 7; 
//Then we will draw dashes in the HTML target to the user 
//need two loops, one to iterate through the wordChoice and find all of the instances of that letter
//One to count the number of turns left
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
       
if (turns ===  6){
    document.getElementById('target1').innerHTML = `<img src="/Users/rikki/Desktop/Hangman-Game/assets/images/circle.png" alt="head" width="300" height="400"></img>`
   
  } else if (turns == 5) {
    document.getElementById('target1').innerHTML = `<img src="/Users/rikki/Desktop/Hangman-Game/assets/images/Body.png" alt="head" width="300" height="400">`
   
  } else if(turns === 4) {
    document.getElementById('target1').innerHTML = `<img src="/Users/rikki/Desktop/Hangman-Game/assets/images/Stick figure.png" alt="head" width="300" height="400">`
   
    
  } else if(turns === 3) {
    document.getElementById('target1').innerHTML = `<img src="/Users/rikki/Desktop/Hangman-Game/assets/images/Stick Figure with 2 arms.png" alt="head" width="300" height="400"></img>`
   
  } else if (turns ===2 ){
    document.getElementById('target1').innerHTML = `<img src="/Users/rikki/Desktop/Hangman-Game/assets/images/Stick figure one leg.png" alt="head" width="300" height="400"></img>`
  } else if(turns === 1 ){
    document.getElementById('target1').innerHTML = `<img src="/Users/rikki/Desktop/Hangman-Game/assets/images/Stick figure one leg.png" alt="head" width="300" height="400"></img>`
   
  }  
    else if(turns === 0 ){
      document.getElementById('target1').innerHTML = `<img src="//Users/rikki/Desktop/Hangman-Game/assets/images/Full stick figure.png" alt="head" width="300" height="400"></img>`
   
  } 
     
       //This reduces the turn count if the letter wasn't found
   }
// want to check if i found all of the letters in the word 
// ask user to enter another letter in p1 
}