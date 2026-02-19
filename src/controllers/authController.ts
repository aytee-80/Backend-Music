import { Request , Response } from "express";
import { loginOrRegister } from "../services/authService";

export async function login(req:Request , res:Response) {
    const firebaseUser = req.user; 

    if(!firebaseUser?.uid || !firebaseUser?.email){
        return res.status(400).json({ message: "Invalid Firebase user"});
    }
    const user = await loginOrRegister({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.name,  
        picture: firebaseUser.picture
    });

    res.json(user);
}