let multer=require("multer");
let router= require("express").Router();
let gid=0;

let auth= require("../middlewares/auth");
let path= require("path");

let fs= require("fs");
if(!fs.existsSync(__dirname+"/"+"uploads"))
fs.mkdirSync(__dirname+"/"+"uploads")

let stor=multer.diskStorage({

   destination:(req,file,call)=>{
    call(null,__dirname+"/"+"uploads");

   },
   filename:(req,file,c)=>{
    c(null,file.originalname+gid);



   } 
})


let upload= multer({storage:stor,fileFilter:(req,file,call)=>{

let ext=file.originalname.split(".")[1];

if(ext!="png"&&ext!="txt"&&ext!="jpeg"&&ext!="jpg"){

   return  call(new Error("enter valid file type"),false)
}
return call(null,true);

}})

let notes=[];
router.post("/",auth,upload.single("file"),async (req,res)=>{

    try{const{title,content}=req.body;
    if(!title||!content){

        res.status(400);
        res.send("please enter titlke and conett of the note");
    }
    const note={
        id:gid,
        title,
        content,
        attachement:path.join(__dirname,"uploads",req.file.filename)
       , 
       createdAt:new Date().toString()
    }
        gid++;

        notes.push(note);
     fs.appendFile('./notes.txt',"\n"+JSON.stringify(note),(err)=>{
        if(err){
            console.log(err);
            res.status(500);
            res.send("internal server error")
        }
     })

     res.send(note);

    }catch(e){

res.status(500);
res.send(e.message);

    }



})

router.delete("/:id",auth,(req,res)=>{
try{
    let {id}=req.params;
    let index=notes.findIndex((v)=>{
        return v.id==id;
    }) 
    if(index==-1){

        res.status(400);
        res.send("error couldnt find the desired file");
    }

    let item= notes[index];
    fs.unlink(item.attachement,(err)=>{
        if(err){
            console.log(err.message);
        }
    });

    notes.splice(index,1);
    res.send("sucssfuly deleted");
}catch(e){

console.log(e.message);
res.status(500);
res.send(e.message);

}







})





router.get("/notes",auth,(req,res)=>{
if(notes.length==0){
    res.send("no notes available");
}
    res.status(200);
res.send(notes);

})



module.exports=router;

