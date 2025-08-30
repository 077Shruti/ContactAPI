import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import userRouter from './Routes/user.js';
import contactRouter from './Routes/contact.js';
import {config} from 'dotenv';
const app=express();

app.use(bodyParser.json());
//.env config
config({path:'.env'});

app.use(express.json());
//User Route
app.use("/api/user",userRouter);
//contact Route
app.use("/api/contact",contactRouter);

mongoose.connect(process.env.MONGO_URL,{
    DBName:"contact_API",
}).then(()=>{
    console.log("Connection Successful");
}).catch((err)=>{  
    console.log("Connection Failed", err);
});



const port=process.env.PORT ;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})