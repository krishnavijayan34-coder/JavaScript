// ===== CLASS CREATION =====
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }

  get personName() {
    return this.name;
  }

  set personName(x) {
    this.name = x;
  }
}

// ===== OBJECT =====
const p1 = new Person("Jack");
p1.greet();

// getter & setter
console.log(p1.personName);
p1.personName = "Sam";
console.log(p1.personName);


// ===== INHERITANCE =====
class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  display() {
    console.log(this.name + " is " + this.age + " years old");
  }
}

const s1 = new Student("John", 22);
s1.display();


// ===== METHOD OVERRIDING =====
class Teacher extends Person {
  greet() {
    console.log("Hello from Teacher");
  }
}

const t1 = new Teacher("Anu");
t1.greet();