const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/mens", async (req,res)=>{
    try{
        const adding = new MensRanking(req.body);
        console.log(req.body);
        const insertData = await adding.save();
        res.status(201).send(insertData);
    } catch(err){
        res.send(err);
    }
})

app.get("/mens", async (req,res)=>{
    try{
        const data = await MensRanking.find({});
        res.send(data);
    } catch(err){
        res.send(err);
    }
})


app.patch("/mens/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const data = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(data);
    } catch(err){
        res.send(err);
    }
})

app.delete("/mens/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const data = await MensRanking.findByIdAndDelete(_id);
        res.send(data);
    } catch(err){
        res.send(err);
    }
})

app.listen(port, ()=>{
    console.log("server start");
})