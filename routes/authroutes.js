//this is my authroutes that is going to used for the signup operationa dn the similar types of the work 

const express=require('express');
const{ Hamarsignup,Hamarlogin,Hamarlogout}=require("../controllers/auth");
const authroutes=express.Router();
const isauthmiddle=require('../middleware/isauthmiddleware');

authroutes.post('/signup',Hamarsignup);
authroutes.post('/login',Hamarlogin)
authroutes.get('/logout',isauthmiddle,Hamarlogout);

module.exports=authroutes;