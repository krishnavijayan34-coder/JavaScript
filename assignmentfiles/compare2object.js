function compareObjects(obj1, obj2) {

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    
    if (keys1.length !== keys2.length) {
        return "Objects are not equal";
    }

    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return "Objects are not equal";
        }
    }

    return "Objects are equal";
}



const obj1 = { name: "krishna", age: 23, city: "Trivandrum" };
const obj2 = { name: "krishna", age: 23, city: "Trivandrum" , qualification: "b.tech" };

console.log(compareObjects(obj1, obj2));