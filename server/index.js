
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mysql=require('mysql');
const cors=require("cors");

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Youcantseeme123",
    database:"newsapp"
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.post ('/login',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    db.query("SELECT * FROM login WHERE email=? AND password=?",[email,password],(err,result)=>
    {    
        if(err)
        {
            res.send({err:err});
        }
        if(result.length>0)
        {   
            res.send(result);
        }
        else{
            res.send({message:"no user found!"})
        }
        
    });
})
app.post('/register',(req,res)=>
{    
    const email=req.body.email;
    const password=req.body.password;
    db.query("INSERT INTO login (email,password) VALUES(?,?)",[email,password],(err,result)=>
    { 
        console.log(err);
    });
})
app.listen(3001,()=>{
    console.log("running on port");
})
