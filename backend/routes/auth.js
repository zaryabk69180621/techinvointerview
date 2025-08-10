let router = require("express").Router();
let jwt= require('jsonwebtoken');

function signtoken(data){
let token=jwt.sign({...data},'mysecret');
return token;

}



router.post("/login",(req,res)=>{

const{email,password}=req.body;
if(!email||!password){

    res.status(400);
    res.send("please enter an email or passwrd");
}
if(email!="test@example.com"||password!="123456"
){

    res.status(400);
    res.send("invalid email or  password");
}

res.send(signtoken({email}));

})


module.exports= router;