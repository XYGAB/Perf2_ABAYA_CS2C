//do-while loop
const prompt = require('prompt-sync')();

const password = "codingbreakfast";//setting the password of user
let user;

//using a do while loop to have the password until it match
do {
    user = prompt("Enter your password:");
    //it determines if the password is correct
    if(user !== password){
        console.log("Incorrect.");
    }
} while (user !== password);
console.log("Access Granted.");