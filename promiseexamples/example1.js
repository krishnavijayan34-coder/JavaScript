
let task = new Promise((resolve, reject) => {
    let done = true; 
    if (done) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed.");
    }
});


task
    .then(result => console.log(result))  
    .catch(error => console.log(error));