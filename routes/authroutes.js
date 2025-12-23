//this is my authroutes that is going to used for the signup operationa dn the similar types of the work 

const express=require('express');
const{ Hamarsignup,Hamarlogin,Hamarlogout}=require("../controllers/auth");
const authroutes=express.Router();
const isauthmiddle=require('../middleware/isauthmiddleware');
const sabdetail=require('../controllers/sabdetail');
// const uploadingimg=require('../controllers/handlingimage');
const upload=require("../middleware/multer");

authroutes.post('/signup',Hamarsignup);
authroutes.post('/login',Hamarlogin)
authroutes.get('/logout',isauthmiddle,Hamarlogout);
authroutes.get('/sabdetail',isauthmiddle,sabdetail);
authroutes.post('/upload',upload.single("image"));

module.exports=authroutes;

