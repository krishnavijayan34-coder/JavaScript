const prompt = require('prompt-sync')();

function greet(name = "Guest") {
    console.log("Hello " + name);
}

let nameInput = prompt("Enter your name (or press enter): ");

greet(nameInput || undefined);