function getIPDetails() {
    fetch("https://pro.ip-api.com/json/?key=xcrn7xnMDT8aFKv&fields=45740031")
    
    .then(response => response.json())
    
    .then(data => {
        let output = "";

        
        for (let key in data) {
            output += key + " : " + data[key] + "<br>";
        }

        document.getElementById("ipData").innerHTML = output;
    })

    .catch(error => console.log(error));
}