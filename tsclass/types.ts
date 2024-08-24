type PersonsInterface = {
    name: string;
    age: number;
}

function greet(person: PersonsInterface){
    return "Hi mr " + person.name + " your age is " + person.age;
}

console.log(greet({
    name: "adarsh",
    age: 21
}))

//types can also have sub properties of interfaces