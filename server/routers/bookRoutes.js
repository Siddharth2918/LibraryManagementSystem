import express from "express";
import BookModel from "../models/book.js";

const bookRouter = new express.Router();

bookRouter.get("/", async (req,res)=>{
    try{
        const books = await BookModel.find();
        return res.status(200).send(books);
    }catch(err){
        return res.status(400).send({message: err.message});
    }
});
bookRouter.get("/:id", async (req,res)=>{
    try{
        const { id } = req.params;
        const book = await BookModel.findOne({_id: id})
        if(!book){
            return res.status(200).send({message: "Book with given id does not exists!"});
        }
        return res.status(200).send(book);
    }catch(err){
        return res.status(400).send({message: err.message});
    }
});
bookRouter.post("/addBook", async (req,res)=>{
    try{
        const { 
            bookName, 
            authorName,
            description,
            publishedOn,
            publisher,
            copiesAvailable
        } = req.body;
    
        const book = new BookModel({
            bookName, 
            authorName,
            description,
            publishedOn,
            publisher,
            copiesAvailable,
        })
    
        const saved = await book.save();
        return res.status(201).send(saved);
    }catch(err){
        return res.status(400).send({message: err.message});
    }
});

bookRouter.put("/:id", async (req,res)=>{
    try{
        const { id } = req.params;
        const exists = await BookModel.find({_id:id});
        if(!exists){
            return res.status(400).send({message: "Book to be updated does not exist"});
        }
        const update = await BookModel.findByIdAndUpdate(id, req.body);
        return res.status(202).send({messsage:`Updates book with id ${id}`});
    }catch(err){
        return res.status(400).send({message:err.message});
    }
});

bookRouter.delete("/:id", async (req,res)=>{
    try{
        const { id } = req.params;
        const exists = await BookModel.findOne({_id: id});
        if(!exists){
            return res.status(400).send({message: "Book to be deleted does not exists."});
        }
        const deleted = await BookModel.findByIdAndDelete(id);
        return res.status(203).send({message: `Book with id ${id} deleted.`});
    }catch(err){
        return res.status(400).send({message: err.message});
    }
    
});

export default bookRouter;