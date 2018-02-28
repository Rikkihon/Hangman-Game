game.js
'use strict'

const p1 = prompt('Enter a letter').toLowerCase();
const p2 = prompt('Enter the next letter').toLowerCase();
const target = document.querySelector('#target');
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i, "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w","x","y","z"];
const guess = ["a", "b", "c", "d", "e", "f", "g", "h", "i, "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w","x","y","z"];

//This is the array of word to pick from a book
const wordsForHangman = ["Harder", "quiet", "Please", "Elmo", "Piggie", "Gerald", "Pigeon", "Chirp", "Chop", "Doctor"]
//This randomly chooses the array
const wordSelection = wordsForHangman[Math.floor(Math.random() * wordsForHangman.length)];

//Then we will count the number of characters in the array selected
const n = str.length;
//Then we will draw dashes in the HTML target to the user 
target3.innerHTML = n*"_"


if(alphabet ===  guest){
    target2.innerHTML = 'This letter was selected'
  } else if (p1 === 'rock' && p2 === 'scissors'){
    target.innerHTML = 'P1 wins!'
  } else if(p1 === 'scissors' && p2 === 'rock'){
    target.innerHTML = 'P2 wins!'
  } else if(p1 === 'scissors' && p2 === 'paper'){
    target.innerHTML = 'P1 wins!'
  } else if (p1 === 'paper' && p2 === 'rock'){
    target.innerHTML = 'P1 wins'
  } else if(p1 === 'paper' && p2 === 'scissors'){
    target.innerHTML = 'P2 wins'
  } else  if(p1 === p2){
    target.innerHTML = 'Draw!!'
  } else {
    target.innerHTML = 'Someone really botched this!'
  }