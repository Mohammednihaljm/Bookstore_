import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js"
import booksRoute from "./routes/booksRoutes.js"
import cors from 'cors'


const app=express();
//middle ware parsing request body
app.use(express.json())
//middle ware handling cors policy
app.use(cors());

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send("welcome mern stack tutorial")

})

app.use('/books',booksRoute);


app.listen(PORT,()=>{
    console.log(`App is listening port: ${PORT}`);
})




mongoose
        .connect(mongoDBURL)
        .then(()=>{
            console.log("app connected to database");
          
        })
        .catch((error)=>{
            console.log(error);
        })