const prompt = require('prompt-sync')();

function removeCharacter() {
    let str = prompt("Enter a string: ");
    let removeChar = prompt("Enter character to remove: ");

    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== removeChar) {
            result += str[i];
        }
    }

    console.log("Result:", result);
}

removeCharacter();