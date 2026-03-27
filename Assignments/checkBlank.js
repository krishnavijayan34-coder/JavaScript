
const prompt = require('prompt-sync')();
function checkBlank() {
    let str = prompt("Enter a string:");
    if(str.trim() === "") {
        console.log("The string is blank.");
    } else {
        console.log("The string is not blank.");
    }
}

checkBlank();