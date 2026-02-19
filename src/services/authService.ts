import prisma from "../../prisma/prismaClient";
import bcrypt from "bcryptjs";


export async function createUserEmail(data: {
    email: string;
    password: string;
    name : string;
}){
    const hashed = await bcrypt.hash(data.password, 12);

    const user = await prisma.user.create({
        data: {
            email: data.email, 
            password: hashed,
            name: data.name
        }
    })
}

export async function loginOrRegister(firebaseUser:{
   uid : string; 
    email : string;
    name : string; 
    picture?: string; 
}){
    let user = await prisma.user.findUnique({
        where: { firebaseId: firebaseUser.uid}
    }); 

    if(!user){
        user = await prisma.user.create({
            data: {
                firebaseId: firebaseUser.uid,
                email: firebaseUser.email,
                name : firebaseUser.name,
                avatarUrl : firebaseUser.picture
            }
        })
    }
}

