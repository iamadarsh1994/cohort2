"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield prisma.user.findMany({});
        //you will users array so you can use for loops for user and you can do many more things, 
        // for (let i = 0; i<users.length; i++){
        //     let user = users[i]
        //     console.log(user.email)
        // }
        console.log(users);
        const user = yield prisma.user.findUnique({
            where: {
                id: 1
            },
            include: {
                posts: true
            }
        });
        // const user = await prisma.user.findUnique({
        //     where:{
        //         id: 1
        //     },
        //     include:{
        //         posts: true
        //     }
        // }) console.log(user)
    });
}
main();
