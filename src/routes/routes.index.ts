import { Router } from "express";
import { authRouter } from "./authRoutes";

const router = Router(); 

router.use("/login" , authRouter);


export { router};