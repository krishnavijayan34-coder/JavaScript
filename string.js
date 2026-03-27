

// 1. Creating strings
let name = "Krishna";
let city = 'kovalam';

console.log("Name:", name);
console.log("City:", city);


// 2. Length
let word = "Hello";
console.log("Length:", word.length);


// 3. Access characters
console.log("First letter:", word[0]);
console.log("Second letter:", word.charAt(1));


// 4. Immutable example
let text = "Hello";
text[0] = "Y"; // won't change
console.log("Immutable check:", text);


// 5. Multiline string
let message = "Hello " +
              "How are you?";
console.log("Message:", message);


// 6. String methods

// concat
let a = "Hello";
let b = "World";
console.log("Concat:", a.concat(" ", b));

// replace
console.log("Replace:", a.replace("H", "Y"));

// split
let sentence = "Hello World";
console.log("Split:", sentence.split(" "));

// slice
console.log("Slice:", a.slice(1, 4));

// uppercase & lowercase
console.log("Uppercase:", a.toUpperCase());
console.log("Lowercase:", a.toLowerCase());

// trim
let spaced = "  hello  ";
console.log("Trim:", spaced.trim());

// includes
console.log("Includes:", a.includes("ll"));

// search
console.log("Search:", a.search("e"));


// 7. Escape characters
let intro = 'My name is \'Krishna\'';
console.log("Escape:", intro);

// new line
console.log("New Line:\nHello\nWorld");