import mongoose from "mongoose";
import { Timestamp } from "bson";

const Book = mongoose.Schema({
    reqID:{
        type:String,
        require:true
    },
    judul:{
        type:String,
        require:true
    },
    isbn:{
        type:String,
        require:true
    },
    userID:{
        type:Number,
        require:true
    },
    sinopsis:{
        type:String,
    },
    file:{
        type:String 
    },
}, {
    timestamps: true,
});
export default mongoose.model("books", Book);