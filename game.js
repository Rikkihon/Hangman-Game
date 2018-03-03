'use strict'
//should be a prompt here, but my node said that prompt is not defined
var p1 = ('Enter a letter').toLowerCase();



const newDiv = documemt.createElement('div');
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w","x","y","z"];
const guess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w","x","y","z"];

//This is the array of word to pick from a book
const wordsForHangman = ["Nap", "quiet", "Please", "Piggie", "Gerald", "Pigeon", "Chirp", "Chop", "Doctor", "Hot dog"];
//This randomly chooses the element from the array
const wordSelection = wordsForHangman[Math.floor(Math.random() * wordsForHangman.length)];
console.log(wordSelection);
//Then we will count the number of characters in the array selected
const n = wordSelection.length;
console.log(n);
const wordChoice = wordSelection.split("");
console.log(wordChoice);

var turns = 7; 
//Then we will draw dashes in the HTML target to the user 
document.getElementById('target8').innerHTML = "_"* n;

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
       
if(turns ===  6){
    //target2.innerHTML = 'The head appears'
    console.log(`head`);
    document.getElementById('target1').innerHTML = "Head Drawn";
  } else if (turns == 5) {
    //target2.innerHTML = 'The body appears'
    //display "head"
    document.getElementById('target2').innerHTML = "Body Drawn";
    console.log(`body`);
  } else if(turns === 4) {
    document.getElementById('target3').innerHTML = "Arm Drawn";
    //display "body"
    console.log(`arm`);
  } else if(turns === 3) {
    document.getElementById('target4').innerHTML = "Arm Drawn";
    //display "arm"
    console.log(`arm`);
  } else if (turns ===2 ){
   // target2.innerHTML = 'The leg appears'
   document.getElementById('target5').innerHTML = "Other Arm Drawn";
    console.log(`other arm`);
  } else if(turns === 1 ){
    document.getElementById('target6').innerHTML = "Leg Drawn";
    console.log('leg');
  }  
    else if(turns === 0 ){
     //target2.innerHTML = 'Game over! Lets play again!'
     document.getElementById('target7').innerHTML = "Other Leg Drawn";
        console.log('other leg');
  } 
     
       //This reduces the turn count if the letter wasn't found
   }
// want to check if we found all of the letters in the word 
// ask user to enter another letter in p1 
}