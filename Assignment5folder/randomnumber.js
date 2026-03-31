const randomBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomBetween(1, 10));