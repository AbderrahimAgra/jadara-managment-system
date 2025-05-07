import express from "express";
import nodemon from "nodemon";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config()

const port = process.env.PORT
const db = process.env.MONGOBD_URI




app.get('/',(req,res)=>{
  res.send('hello Ikram!')
});
app.get('/user',(req,res)=>{
  res.send('hello Ikram!')
});

mongoose.connect(db).then(()=>{
  console.log('connection to db success');
}).catch((err)=>{
  console.log(err);
});

app.listen(port,()=>{
  console.log(`app listinig port ${port}`);
});