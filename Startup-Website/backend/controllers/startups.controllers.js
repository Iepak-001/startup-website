import {Startups} from "../models/startups.models.js"

export const fetchStartups=async(req,res)=>{
    
    const {limit}=req.body || null;

    console.log(limit);

    const startup=await Startups.find().limit(limit);

    
    return res.status(201).json(startup)
}



export const insertStartup=async(req,res)=>{
    
    const {name}=req.body

    const alreadyExistingEntry=await Startups.findOne({name:name})

    if(alreadyExistingEntry){
        throw new Error("Already contained in DB");
    }
    
    const startup=await Startups.create(req.body)

    console.log(startup);
    

    return res.status(201).json("Successfully inserted")
}

export const fetchOneStartup=async(req,res)=>{
    
    console.log("Reached Here");
    
    const {_id}=req.body;

    const startup=await Startups.find({_id:_id});

    
    return res.status(201).json(startup)
}
