
const bcrypt = require('bcryptjs');

const express=require ('express');
const cors=require('cors');
require('./db/config');
const User=require('./db/User');
const app=express();
app.use(express.json());
app.use(cors());

app.post('/signup',async (req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    if(result){
        res.send(result);
    }
    else{
        res.send('error');
    }
});

app.listen(5000);