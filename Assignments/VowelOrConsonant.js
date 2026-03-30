const prompt = require('prompt-sync')();

function checkVowelOrConsonant() {
    let str = prompt("Enter a string: ");
    let index = Number(prompt("Enter index: "));

    let char = str[index];

    if (!char) {
        console.log("Invalid index.");
        return;
    }

    if ("aeiouAEIOU".includes(char)) {
        console.log(char + " is a vowel.");
    } else {
        console.log(char + " is a consonant.");
    }
}

checkVowelOrConsonant();