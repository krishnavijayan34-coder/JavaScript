// 1. Object using object literal
var person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    email: "johndoe@gmail.com",

    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Person1 Full Name:", person1.getFullName());


// 2. Object using new Object()
var person2 = new Object();

person2.firstName = "James";
person2["lastName"] = "Bond";
person2.age = 25;
person2.email = "jamesbond@gmail.com";

person2.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

console.log("Person2 Full Name:", person2.getFullName());


// 3. Accessing properties
console.log("First Name:", person2.firstName);
console.log("Last Name:", person2["lastName"]);


// 4. Undefined property
console.log("Salary:", person2.salary); // undefined


// 5. hasOwnProperty check
if (person2.hasOwnProperty("firstName")) {
    console.log("First Name exists:", person2.firstName);
}


// 6. Nested Object
var person3 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,

    address: {
        id: 1,
        country: "UK"
    }
};

console.log("Country:", person3.address.country);