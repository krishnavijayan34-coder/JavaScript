const prompt = require('prompt-sync')();

function countdown(n) {
    if (n <= 0) {
        return; 
    }

    console.log(n);
    countdown(n - 1); 
}

let num = Number(prompt("Enter a number: "));
countdown(num);