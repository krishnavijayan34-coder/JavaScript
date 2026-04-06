let namesSet = new Set(["John", "Krishna", "Jack", "James", "Jeni"]);

let namesArray = Array.from(namesSet);

let filteredNames = namesArray.filter(name => name.startsWith("J"));


let upperNames = filteredNames.map(name => name.toUpperCase());

upperNames.forEach(name => console.log(name));