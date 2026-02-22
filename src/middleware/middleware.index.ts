import { authMiddleware } from "./authMiddleware";

export function Middleware(){
    return{
        authMiddleware : authMiddleware(),
    }
}