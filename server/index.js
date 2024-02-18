import express from "express";
import cors from "cors";
import { PORT } from "./variables.js";


const app=express();
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Hello welcome to index.js / get method");
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})