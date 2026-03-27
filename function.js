const prompt = require('prompt-sync')();
function welcomeUser(userName) {
    console.log("Welcome to the JavaScript World, " + userName + "!");
}
let nameInput = prompt("What is your name? ");
welcomeUser(nameInput);
