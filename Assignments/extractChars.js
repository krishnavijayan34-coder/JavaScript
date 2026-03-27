const prompt = require('prompt-sync')();

function extractChars() {
    let str = prompt("Enter a string: ");
    let num = Number(prompt("Enter number of characters to extract: "));
    let result = str.substring(0, num);
    console.log("Extracted part:", result);
}

extractChars();