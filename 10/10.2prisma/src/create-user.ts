import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// const prisma = new PrismaClient({log: ['info', 'query'],}

async function main() {
  // ... you will write your Prisma Client queries here 
  await prisma.user.create({
    data:{
        email: "adarshm8989@gmail.com",
        name:"adarsha mishra"
    }
  })
}

main();

//   .then(async () => {
//     console.log("done with the query")
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })