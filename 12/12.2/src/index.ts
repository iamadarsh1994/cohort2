interface User{
    name: String;
    age: number;

}

function sumOfAge(user1: User, user2: User){
    return user1.age + user2.age;
}

const age = sumOfAge({name: 'adarsh', age: 12}, {name: 'shiva', age: 23})
console.log(age)

//pick
//partial
//readonly
//record, map
//exclude
//type inference in zod
