"use strict";
function greet(person) {
    return "Hi mr " + person.name + " your age is " + person.age;
}
console.log(greet({
    name: "adarsh",
    age: 21,
    gender: {
        gender: "male"
    }
}));
