//if else if
const prompt = require('prompt-sync')();

let grade = prompt("Enter your Age:");

//using if else if to determine the entered grade
if (grade>=90){
    console.log("Excellent.");
} else if(grade>=85){
    console.log("Good.");
} else if(grade>=75){
    console.log("Fair.");
} else {
    console.log("Needs Improvement.");
}