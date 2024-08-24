// function calculateSum(a: number, b: number): number {
//     return a + b;
// }

// const finalSum = calculateSum(1,2);
// console.log(finalSum);

// const users =[{

// }]

//interfaces 
// all interfaces - starts with capital letter
// interface Person{
//     name: string;
//     age: number;
// }
// export function greet(person : {
//     name: string;
//     age: number
// }): string {
//     return "Hello mr " + person.name + " glad that you are " + person.age
// } //or after interfaces declaration
// export function greet(person: Person): string{
//     return "Hello mr " + person.name + " glad that you are " + person.age + "years old ";
// }



// console.log(greet({
//     name:"Adarsh",
//     age: 29

// }))
interface PersonInterface{
    name: string;
    age: number;
    greet(): string;
}

class Person implements PersonInterface{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    greet(){
        return "hi mr " + this.name + " you are this " + this.age + " old";
    }
}

const personObject = new Person("adarsh", 21)
console.log(personObject.greet())