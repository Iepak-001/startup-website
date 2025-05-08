import {Startups} from "../models/startups.models.js"

export const insertStartup=async(req,res)=>{
    const {name,city}=req.body
    console.log(name,city);

    const alreadyExistingEntry=await Startups.findOne({name:name})

    if(alreadyExistingEntry){
        throw new Error("Already contained in DB");
    }
    

    const startup=await Startups.create({
        name,
        city
    })

    console.log(startup);
    

    return res.status(201).json("Successfully inserted")
}