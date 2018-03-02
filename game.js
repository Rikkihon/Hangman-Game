'use strict'
const p1 = ('Enter a letter').toLowerCase();

//const target = document.querySelector('#target');

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

turns = 7; 
//Then we will draw dashes in the HTML target to the user 
//target3.innerHTML = (n * "_");

//need two loops, one to iterate through the wordChoice and find all of the instances of that letter
//One to count the number of turns leftp
for (i = 0; i++; i <= turns) {
    //write that the turn conditions for ending the game here  

    for (j = 0; j++; j <=wordChoice.length){

if(p1 ===  wordChoice){
    target2.innerHTML = 'This letter appears'
    console.log(p1);
  } else if (p1 !== wordChoice) {
    target.innerHTML = 'This letter is not a choice'
    //display "head"
    console.log(head);
  } else if(p1 !== wordChoice){
    target.innerHTML = 'This letter is not a choice'
    //display "body"
    console.log(body);
  } else if(p1 !== wordChoice)){
    target.innerHTML = 'This letter is not a choice'
    //display "arm"
    console.log(arm);
  } else if (p1 !== wordChoice){
    target.innerHTML = 'This letter is not a choice'
    //display " other arm"
    console.log(other arm);
  } else if(p1 !== wordChoice){
    target.innerHTML = 'This letter is not a choice'
    console.log(leg);
  }  
    else if(p1 !== wordChoice){
     target.innerHTML = 'This letter is not a choice'
        console.log(other leg);
  } else  if(p1 !== wordChoice){
    target.innerHTML = 'Your turn is up! Play Again!'
  } else {
    target.innerHTML = 'Someone really botched this!'
  }
}