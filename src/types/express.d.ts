import { DecodedIdToken } from "firebase-admin/auth"
import { Request } from "express";

// interface UserPayload{
//     uid: string; 
//     email: string;
// }

// declare global{
//     namespace Express{
//         interface Request{
//             user?: DecodedIdToken 
//         }
//     }
// }

declare module 'express-serve-static-core'{
    interface Request{
        user?: DecodedIdToken;
    }
}

export {};