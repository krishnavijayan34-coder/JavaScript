let numbers = new Set([1, 2, 3, 4, 5, 6]);

for (let num of numbers) {
    if (num % 2 !== 0) {
        numbers.delete(num);
    }
}

for (let num of numbers) {
    console.log(num);
}