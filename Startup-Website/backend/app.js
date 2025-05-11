import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"


// Express ke andar => request, response
//middlewares 
//middlewares on express ka use krte hai
// app.use( ) se

const app=express()

//cors batata hai kaha kaha se request accept krenge

app.use(cors({
    origin: "*",
    credentials:true
}))

//JSON file jo recieve ho rha uska limit
app.use(express.json({
    limit:"64kb"
}))

// encoded url (deepak%20Kumar) ko accept krana
app.use(express.urlencoded({
    extended:true
}))

// Files ka storage public folder me
app.use(express.static("public"))

//secure cookies
// user.cookies ka access de dega
app.use(cookieParser())

//ROUTES LANA HAI
import startupsRouter from './routes/startups.routes.js'
import foundersRouter from "./routes/founders.routes.js"
//Routes declaration
app.use("/startups",startupsRouter) //userRouter ko control de dega
app.use("/founders",foundersRouter)


export {app}