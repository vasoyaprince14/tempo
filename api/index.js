import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
const app=express();
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected");
})


app.listen(process.env.PORT,()=>{
    console.log(
        `server is running on port ${process.env.PORT} `
    )
})