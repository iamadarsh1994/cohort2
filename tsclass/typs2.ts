type PersonGenderprops = {
    gender: string;
}

type PersonsInterface = {
    name: string;
    age: number;
    gender: PersonGenderprops;
}

function greet(person: PersonsInterface){
    return "Hi mr " + person.name + " your age is " + person.age;
}

console.log(greet({
    name: "adarsh",
    age: 21,
    gender: {
        gender: "male"
    }
}))