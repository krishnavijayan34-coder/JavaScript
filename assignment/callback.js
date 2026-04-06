const filterArray = (arr, callback) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
};

const isEven = (num) => num % 2 === 0;


let numbers = [1, 2, 3, 4, 5, 6];

let output = filterArray(numbers, isEven);

console.log(output);