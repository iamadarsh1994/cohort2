"use strict";
// function calculateSum(a: number, b: number): number {
//     return a + b;
// }
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hi mr " + this.name + " you are this " + this.age + " old";
    }
}
const personObject = new Person("adarsh", 21);
console.log(personObject.greet());
