import express from "express";
import mysql from "mysql";
import pkg from "cors";

const app=express();
app.use(express.json());
////ar cors = require('cors')

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"mysqlnode"
})
app.get("/arrivaln",(req,res)=>{
    const q="SELECT * FROM arrivaln";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})





app.listen(4000,()=>{
    console.log("Backend is running")})