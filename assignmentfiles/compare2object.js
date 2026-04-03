function compareObjects(obj1, obj2) {

    let keys = Object.keys(obj2);

    for (let key of keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}


const obj1 = { name: "krishna", age: 23, city: "Trivandrum" };
const obj2 = { name: "krishna", age: 23 };

console.log(compareObjects(obj1, obj2));