import { Request , Response , NextFunction } from "express";
import { firebaseAdmin } from "../config/firebase";
import { DecodedIdToken } from "firebase-admin/auth";

export function authMiddleware(){
    interface AuthRequest extends Request{
        user?: DecodedIdToken;
    }
    const firebaseMiddleware = async(
        req: AuthRequest,
        res: Response,
        next: NextFunction
    ) => {
        const header = req.headers.authorization;

        if(!header?.startsWith("Bearer")){
            return res.status(401).json({message: "Unauthorized"}); 
        }

        const token = header.split(" ")[1]; 

        try{
            const decoded = await firebaseAdmin.auth().verifyIdToken(token);
            req.user = decoded; 
            next();
        }catch{
            res.status(401).json({message: "Invalid token"});
        }
    }

    return{
        firebaseMiddleware,
    }
}