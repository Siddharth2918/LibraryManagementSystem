import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT, MONGO_URL } from "./variables.js";
import bookRouter from "./routers/bookRoutes.js"

const app=express();
app.use(express.json());
app.use(cors());
app.use('/books', bookRouter);

app.get('/', (req, res)=>{
    res.send("Hello welcome to index.js / get method");
})


mongoose.connect(MONGO_URL);
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})