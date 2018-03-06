'use strict'
//This is the array of word to pick from a book
const wordsForHangman = ["nap", "quiet", "please", "ball","piggie", "gerald", "pigeon", "chirp", "chop", "doctor", "hotdog"];
//This randomly chooses the element from the array
const wordSelection = wordsForHangman[Math.floor(Math.random() * wordsForHangman.length)];
console.log(wordSelection);
//Then we will count the number of characters in the string selected from the array
const wordChoice = wordSelection.split("");
var arr3 = [wordSelection];
var arr4 = [wordChoice];
 
var i = 0;
var arr = [];  //the user's letters 
var turns = 10;   
var n = 0;
var arr1 = [];// my letters for my word
var wins = []; //this part of my code doesnt work well yet 
var loss = []; //this part of my code doesnt work well yet 



for (var n = 0; n < wordChoice.length; n++) {              //loop the length of the word
  arr1.push('_  '); // push the value into the array
}
document.getElementById('dashes').innerHTML ='These are the letters you entered:' + arr.toString();// print the results
console.log(arr1.toString());
document.getElementById('other').innerHTML = arr.join(', ')// print the results
  
  for (var i = 0; i < 10; i++) {              // loop 10 times
    arr.push(prompt('Enter a letter. You will be asked 10 times and you can not see the dashes or where the letters are going in this game.  But if you look in console log, you will get a great hint!' + (i+1))); // push the value into the array
    
    document.getElementById('target7').innerHTML = `The word was ` + wordSelection;
    //search the word for the letter entered

    var found = false;
    for(var j=0; j < wordChoice.length; j++) {
      if(arr[i] == wordChoice[j]) {// i is the user's input loop, j is if it finds it in the index of my loop
        alert(arr[i] + " was found at position " + j + " in wordChoice");
        found = true;
        
      }
    }
    document.getElementById('target7').innerHTML = `The word was ` + wordSelection;
    
    //it found a match. keep going
    if(found == true) {
      arr1.toString();
      //update the dashes / html content here
      document.getElementById('target4').innerHTML = arr.toString();
      turns --;
    }

    //no match, lose a turn.
    else {
      turns --;
      alert("No match! You have " + turns + " turns left");
     
     if (turns ===  6){
        document.getElementById('target1').innerHTML = `<img src="assets/images/circle.png" alt="head" width="300" height="400"></img>`
       
      } else if (turns == 5) {
        document.getElementById('target1').innerHTML = `<img src="assets/images/Body.png" alt="head" width="300" height="400">`
       
      } else if(turns === 4) {
        document.getElementById('target1').innerHTML = `<img src="assets/images/Stick figure.png" alt="head" width="300" height="400">`
       
        
      } else if(turns === 3) {
        document.getElementById('target1').innerHTML = `<img src="assets/images/Stick Figure with 2 arms.png" alt="stick with 2 arms" width="300" height="400"></img>`
       
      } else if (turns ===2 ){
        document.getElementById('target1').innerHTML = `<img src="assets/images/Stick figure one leg.png" alt="stick with arms and one leg" width="300" height="400"></img>`
      } else if(turns === 1 ){
        document.getElementById('target1').innerHTML = `<img src="assets/images/Stick figure one leg.png" alt="stick with one leg" width="300" height="400"></img>`
       
      }  
        else if(turns === 0 ){
          document.getElementById('target1').innerHTML = `<img src="assets/images/Full stick figure.png" alt="head" width="300" height="400"></img>`
         
      } 

    }
  
  }
  
 

  


//need to decide how to declare the number of wins

while (wins = true;) {
  document.getElementById('wins').innerHTML = 'You have ' + wins + 'wins';
  }
  if (wins = false) {
  
  }

while (turns >= 7) {
  document.getElementById('wins').innerHTML = 'You have ' + wins + 'wins';
  }
  if (turns <=7) {
  document.getElementById('wins').innerHTML = "Game Over";
  }

while (turns > 0) { 

   //This loop looks through the array for the letter that user input
    var matchCount = 0;
    //Matchcount is the number of times the letter was found in the array
    for (var j = 0; j++; j <=wordChoice.length){
        if (wordChoice[j] === p1) {
            matchCount++;
            
        }
    }
   if  (matchCount === 0) {
       turns--;
   
       //This reduces the turn count if the letter wasn't found
   }
// want to check if i found all of the letters in the word 

}