import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true,
    },
    authorName:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    publishedOn:{
        type: String,
        required: true,
    },
    publisher:{
        type: String,
        required: true,
    },
    copiesAvailable: {
        type: Number,
        required: true,
    }
});

const BookModel= new mongoose.model("Books", BookSchema);

export default BookModel;