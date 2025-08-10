let express= require("express");

let auhtrouter= require("./routes/auth");
let notesrouter= require("./routes/notes");
let app= express();
app.listen(3000,()=>{
console.log("app started listeing");
})
app.use(express.urlencoded({extended:true}));

app.use("/auth",auhtrouter);
app.use("/notes",notesrouter);



