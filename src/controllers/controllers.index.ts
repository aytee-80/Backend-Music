import {authController} from "./authController";

export function controllers(){
    return{
        authController : authController(),
    }
}