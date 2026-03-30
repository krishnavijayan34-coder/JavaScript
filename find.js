const findExample = () => {
    let arr = [5, 10, 15];

    let result = arr.find(value => value > 10);
    console.log(result); // 10
};

findExample();