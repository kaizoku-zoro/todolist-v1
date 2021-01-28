const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const https = require("https");
app.set("view engine","ejs");
app.use(express.static("public"))
var items = [];
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    var kindOfDay = today.toLocaleDateString("en-US",options);
    res.render("list",{day:kindOfDay,newItem:items});
});

app.post("/",function(req,res){
    if(req.body.newEntry==""){
        
    }
    else{
        items.push(req.body.newEntry);
    }
    res.redirect("/");
});


app.listen(process.env.PORT||3000,function(req,res){
    console.log("Server running on port 3000");
});