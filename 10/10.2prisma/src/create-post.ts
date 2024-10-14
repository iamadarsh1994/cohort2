import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.post.create({
        data: {
            title: "title of post2",
            content: "asdadsasdasdasdasdwertyhitahi",
            published: true,
            author: {
                connect: {
                    id: 2
                }
            } //you can use authorId too for every author to connect
        }
    })
}

main()