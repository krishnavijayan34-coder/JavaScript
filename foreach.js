const fruits = new Map();

fruits.set("apple", 100);
fruits.set("banana", 200);

fruits.forEach((value, key) => {
    console.log(key + " = " + value);
});