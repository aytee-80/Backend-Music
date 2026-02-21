import { Request , Response } from "express";
import { Service } from "../services/service.index";
import { DecodedIdToken } from "firebase-admin/auth";

const { auth } = Service();

interface AuthRequest extends Request{
    user?: DecodedIdToken;
} 

export function authController(){

        const login = async (req:AuthRequest , res:Response) => {
            const firebaseUser = req.user; 

            if(!firebaseUser?.uid || !firebaseUser?.email){
                return res.status(400).json({ message: "Invalid Firebase user"});
            }
            const user = await auth.loginOrRegister({
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                name: firebaseUser.name,  
                picture: firebaseUser.picture
            });

            res.json(user);
        }
    return {
        login,
    }
}