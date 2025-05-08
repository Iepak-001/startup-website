import dotenv from "dotenv";
dotenv.config({
  path:'./.env'
})
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/connectDb.js";
import {app} from "./app.js"



// CONNECTDB Async code  hai toh 
//fn call complete ke baad response aata hai
// .then   and   .catch se handle krenge
//multiple   .then allowed


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Mongo db connection fail messege from index.js",error);
})