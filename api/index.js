import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
const app=express();
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected");
})
app.use(express.json());
app.use("/api/user",userRoutes);
app.use("/api/auth", authRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message|| 'Internal server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})
app.listen(process.env.PORT,()=>{
    console.log(
        `server is running on port ${process.env.PORT} `
    )
})
