const express=require('express')

const app=express()

const bodyParser=require('body-parser')

const mongoose=require('mongoose')


const router=require('./src/router/movieRouter')

app.use(bodyParser.json())

app.use('/movie',router)


let username="niyamath";
let password="niyamath";
let clusterUrl="cluster07.gy8qe.mongodb.net";
let dbName="test";

let dbUrl=`mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}`;

mongoose.connect(dbUrl).then(()=> console.log("connected to mongo"))
.catch(error=>console.log(`opps ${error}`))

console.log(`username= ${username}`);

app.listen(3000,()=>{
    console.log("server stared");
})

// db name shoud be test

// mongodb+srv://niyamath:<password>@cluster07.gy8qe.mongodb.net/test