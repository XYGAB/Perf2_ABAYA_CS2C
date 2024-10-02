let number = 6;
while (number <=10  && number >=4) {
    console.log("Guess a number between 1 and 10:" + " "+ number);
    console.log("Too high!");
}  if (number <=2 && number >=1) {
    console.log("Guess a number between 1 and 10:" + " " + number);
    console.log("Too Low");
} else if (number == 3) {
    console.log("Guess a number between 1 and 10:" + " "+ number);
    console.log("Correct");
} else {
    console.log("Try again");
}