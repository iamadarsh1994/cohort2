import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany({});
    
    //you will users array so you can use for loops for user and you can do many more things, 
    // for (let i = 0; i<users.length; i++){
    //     let user = users[i]
    //     console.log(user.email)
    // }
    console.log(users);
    const user = await prisma.user.findUnique({
        where:{
            id: 1
        },
        include:{
            posts: true
        }
    })
    // const user = await prisma.user.findUnique({
    //     where:{
    //         id: 1
    //     },
    //     include:{
    //         posts: true
    //     }
    // }) console.log(user)
}

main()