class Person {
  constructor(name) {
    this.name = name;
  }

  get personName() {
    return this.name;
  }

  set personName(x) {
    this.name = x;
  }
}

let person1 = new Person("Jack");

console.log(person1.personName);

person1.personName = "Sam"; 
console.log(person1.personName);