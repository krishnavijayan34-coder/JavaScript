const prompt = require('prompt-sync')();

function checkPalindrome() {
    let str = prompt("Enter a string: ");

    let reversed = str.split('').reverse().join('');

    if (str === reversed) {
        console.log("It is a palindrome.");
    } else {
        console.log("It is not a palindrome.");
    }
}

checkPalindrome();