let failTask = new Promise((resolve, reject) => {
    let taskDone = false; // Simulate failure

    if (taskDone) {
        resolve("Task completed successfully!");
    } else {
        reject("Task failed!"); 
    }
});

failTask
    .then(result => console.log(result)) 
    .catch(error => console.log(error));  