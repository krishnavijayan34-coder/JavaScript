let numberCheck = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10); 
    console.log("Generated number:", num);

    if (num > 5) {
        resolve("Number is greater than 5!");
    } else {
        reject("Number is 5 or less!");
    }
});

numberCheck
    .then(result => console.log(result))
    .catch(error => console.log(error));