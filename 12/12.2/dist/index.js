"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'adarsh', age: 12 }, { name: 'shiva', age: 23 });
console.log(age);
