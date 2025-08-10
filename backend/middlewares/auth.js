let jwt= require("jsonwebtoken");
function auth(req,res,next){
try{
    let header=req.headers['authorization'];
    let token= header.split(" ")[1];


    
    const payload=jwt.verify(token,"mysecret");
    req.email=payload.email;
    next();



}
catch(e){
console.log(e.message);
res.status(401);
res.send("you are unathourized");


}}



 module.exports=auth;