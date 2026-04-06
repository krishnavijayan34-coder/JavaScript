
function downloadFile(fileName, callback) {
    console.log(`Starting download of ${fileName}...`);

    
    setTimeout(() => {
        console.log(`${fileName} downloaded successfully `);

        
        callback(fileName);
    }, 3000);
}

function processFile(fileName) {
    console.log(`Processing ${fileName}...`);
    console.log(`${fileName} processed successfully `);
}

downloadFile("image.jpg", processFile);

console.log("This line runs before download completes ");