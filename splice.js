const spliceExample = () => {
    let arr = [7, 3, 4, 1];
console.log("Original array:", arr);
arr.splice(2, 0, 10);
console.log("After adding 10 at index 2:", arr);
arr.splice(1, 2);
console.log("After removing 2 elements from index 1:", arr);
arr.splice(1, 1, 99);
    console.log("After replacing element at index 1 with 99:", arr);
};
spliceExample();