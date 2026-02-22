import { Router } from "express";
import { controllers } from "../controllers/controllers.index";
import { Middleware } from "../middleware/middleware.index";

const { authController} = controllers();
const {authMiddleware} = Middleware();

const router = Router(); 

router.post("/", authMiddleware.firebaseMiddleware , authController.login);

export { router as authRouter};