import express from "express";
import cors from "cors"; 
import prisma from "./prisma/prismaClient";



const app = express(); 
app.use(cors()); 
app.use(express.json()); 

app.post("/users", async (req , res) => {
    try{
    const user = await prisma.user.create({
        data: req.body
    });
    res.status(201).json(user);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Failed to create user"});
    }
});

app.get("/users", async (req, res) => {
    try{
    const users = await prisma.user.findMany(); 
     res.json(users);
    
    }catch(error){
        console.error(error);
        res.status(500).json({error: "failed to fetch users"});
    }
});

app.get("/",(req,res) => {
    res.json({ message: "API is running"});
})

app.listen(3000, () => {
    console.log("Server running on port 3000"); 
});