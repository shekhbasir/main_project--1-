const express=require('express')
const cors=require('cors');
const bodyparser=require('body-parser');
const session=require('express-session');
const app=express();
require('dotenv').config();
const cookieparser=require('cookie-parser');
const DbConnection=require('./config/DbConnect');
const authroutes=require('./routes/authroutes');





app.use(express.json());
app.use(cookieparser())
app.use(express.urlencoded({extended:true}));


//here ia m going to calling all the routes 

app.use('/auth',authroutes);





const port=process.env.PORT || 7000;

app.listen(port,()=>{
  console.log(`this is the link http://localhost:${port}`);
  DbConnection();
})

//now i am going to making the connection of this 