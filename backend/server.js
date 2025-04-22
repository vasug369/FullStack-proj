const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send("this is home directory");
})

app.get("/custom",(req,res)=>{
    res.send("this is custom path");
})

app.get("feature",(req,res)=>{
    res.send("here is the new feature path");
})
app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})