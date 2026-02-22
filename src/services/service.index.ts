import { authService } from "./authService";

export function Service(){
    return {
        auth: authService(),
    };
}