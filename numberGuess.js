//while-loop
const prompt = require('prompt-sync')();
// Set the correct number
const numberGuessed = 5; // can be change this to any number between 1 and 10
let inputNumber = 0;

// Use a while loop to keep asking until the user guesses correctly
while (inputNumber != numberGuessed) {
    inputNumber = parseInt(prompt("Guess a number between 1 and 10:"), 10);

    if (inputNumber < numberGuessed) {
        console.log("Too low!");
    } else if (inputNumber > numberGuessed) {
        console.log("Too high!");
    } else if (inputNumber == numberGuessed) {
        console.log("Correct!");
    } else {
        console.log("Please enter a valid number.");
    }
}