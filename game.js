'use strict'

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w","x","y","z"];
const guess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w","x","y","z"];

//This is the array of word to pick from a book
const wordsForHangman = ["Nap", "quiet", "Please", "Piggie", "Gerald", "Pigeon", "Chirp", "Chop", "Doctor", "Hot dog"];
//This randomly chooses the element from the array
const wordSelection = wordsForHangman[Math.floor(Math.random() * wordsForHangman.length)];
console.log(wordSelection);
//Then we will count the number of characters in the string selected from the array
const wordChoice = wordSelection.split("");
console.log(wordChoice.length);
var dashes = wordChoice.length;
var dashesString = "___________________";
document.getElementById('dashes').innerHTML = dashesString.substring(0, wordChoice.length - 1)

var dash = ["_ ","_ ","_" ,"_" ,"_" ,"_ ","_ ", "_ ", "_ "];
var n = 0;
var arr1 = []; 

for (var n = 0; n <= wordChoice.length; n++) {              // loop 10 times
  arr1.push('_ ' + ` `+ (i+1)); // push the value into the array
}

document.getElementById('dashes').innerHTML = arr1.join('  ')// print the results

 

var i = 0;
var arr = [];                               // define our array

  for (var i = 0; i < 10; i++) {              // loop 10 times
    arr.push(prompt('Enter a letter ' + (i+1))); // push the value into the array
  }
  
  document.getElementById('other').innerHTML = arr.join(', ')// print the results


//need to decide how to declare the number of wins
const wins = 5; 

while (turns > 7) {
  document.getElementById('wins').innerHTML = ('wins') ;
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
            document.getElementById('other').innerHTML = p1;
            //Show the letter from p1 in place of the dashes here - Need help writing this
        }
    }
   if  (matchCount === 0) {
       turns--;
       
if (turns ===  6){
    document.getElementById('target1').innerHTML = `<img src="assets/images/circle.png" alt="head" width="300" height="400"></img>`
   
  } else if (turns == 5) {
    document.getElementById('target1').innerHTML = `<img src="assets/images/Body.png" alt="head" width="300" height="400">`
   
  } else if(turns === 4) {
    document.getElementById('target1').innerHTML = `<img src="assets/images/Stick figure.png" alt="head" width="300" height="400">`
   
    
  } else if(turns === 3) {
    document.getElementById('target1').innerHTML = `<img src="assets/images/Stick Figure with 2 arms.png" alt="head" width="300" height="400"></img>`
   
  } else if (turns ===2 ){
    document.getElementById('target1').innerHTML = `<img src="assets/images/Stick figure one leg.png" alt="head" width="300" height="400"></img>`
  } else if(turns === 1 ){
    document.getElementById('target1').innerHTML = `<img src="assets/images/Stick figure one leg.png" alt="head" width="300" height="400"></img>`
   
  }  
    else if(turns === 0 ){
      document.getElementById('target1').innerHTML = `<img src="assets/images/Full stick figure.png" alt="head" width="300" height="400"></img>`
   
  } 
     
       //This reduces the turn count if the letter wasn't found
   }
// want to check if i found all of the letters in the word 
// ask user to enter another letter in p1 
}