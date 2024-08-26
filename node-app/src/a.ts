interface User{
    firstName: string;
    lastName: string;
    age: number,
    email?:string
}

function isLegal (user:User ) {
    if (user.age > 18){
        return true;
    } else{
        return false;
    }
}

function greet (user:User){
    console.log("hi there" + user.firstName)
}

console.log(isLegal({firstName:"adarsh",
    lastName:"mishra",
    age: 20
}))