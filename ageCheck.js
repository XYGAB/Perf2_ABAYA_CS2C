// If Statement
const prompt = require('prompt-sync')();

let age = prompt("Enter your Age:");

//using if and else if 
if (age>=20){
    console.log("You are an adult.");
} else if(age>=14){
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}