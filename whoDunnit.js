// EPISODE 1

//   I think it will log "The murderer is Miss Scarlet" on console. 
// function declareMurderer() was passed in the variable verdict.
// The function declareMurderer() takes in the object senario, referencing the key "murderer".

//Result: "The murderer is Miss Scarlet"




//EPISODE 2

// the function declareMurderer() is passed in the variable verdict. 
// The function declareMurderer takes the variable murderer.
// The variable murderer is a constant and its value is Professor Plum.
// Therfore I think 'The murderer is Professor Plum' will appear on console.

// Result: Error message




//EPISODE 3

// I think it will log
// 'First Verdict: 'The murderer is Mrs. Peacock'
// 'Second Verdict: 'The murderer is Professor Plum'
// It is because I think Javascript let inside of method declareMurderer 
// change, despite its constant status. 

//Result: the guess was correct!




//EPISODE 4

// My guess on what will be logged on console;
// ERROR MESSAGE
// Suspect three is Mrs. Peacock.

// the first one should return an error message as suspectOne and suspectTwo are not
// defined inside the function declaerAllSuspects()

// Result: I was wrong on the first console.log(). I thought let variable only exists within a function. 




// EPISODE 5

// My guess on what will be printed on console;
// The weapon is the Candle Stick. 
// method changeWeapon might change what is inside const senario witihin itself, 
// but I don't think it will affect another function declareWeapon()

// Result: I was wrong again! 




// EPISODE 6

// My guess on what will be printed on console:
// Not sure!
// The result: The murderer is Mrs. White.



//EPISODE 7

//my guess: the console will log "The murderer is Miss Scarlet"
//It is because changeMurderer runs the function plotTwist at the end, and 
//let and const inside the function plotTwist are only available within a function 
//that they are defined in. And the second last function being run in changeMurderer is
//unexpectedoutcome, and its variable has (?) global scope. 

//the result: I was wrong!



//EPISODE 8

//My guess: "The wewapon is Candle Stick" is printed on console.
//function changeSenario() runs the function unexpectedOutcome inside, 
//which changes the key weapon in Object senario. 
//no other functions change the weapon key. 

//The result: Correct guess




// EPISODE 9

// My guess: "The murderer is Professor Plum" will be printed on console.
//if statement is not inside a function, and the variable let is only available 
//in if statement. 

//The result: "The murderer is Professor Plum" 