"use strict"

//모듈
const express=require("express");
const app=express();


//라우팅
const home=require("./app/bin/routes/home")

//app setting
app.set("views","./views");
app.set("view engine", "ejs");


app.use("/", home); //use->미들웨어를 등록해주는 메서드.

module.exports=app;

