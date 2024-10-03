const prompt = require('prompt-sync')();

let weekdays =  prompt("Please enter a day of the week:");

//using switch
switch (weekdays) {
case "Monday"://first to case
    console.log("Lunes na naman!?");
    break;
case "Tuesday"://second to case
    console.log("Katamad ka'pag second day!");
    break;
case "Wednesday"://third to case
    console.log("3 days na lang");
    break;
case "Thursday"://fourth to case
    console.log("Burden talaga ang day na to!!");
    break;
case "Friday"://fifth to case
    console.log("Finally last day!!!");
    break;
default://last and it used default to stop 
console.log("Chill muna tayo ngayong weekends.");
}