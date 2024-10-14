//create your schema, run the migration, 

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main () {
    await prisma.user.update({
        where:{
            id: 1
        },
        data:{
            name: 'Adarsh Mishra2'
        }
    })

}

main()
//you can delete the some post so data : posts: ig delete the unpublished posts. 
