var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
var friends = ["Tony","Account","Doggy","Pooja"];
app.get("/", function(req,res){
   res.render("home.ejs");
});

app.post("/addfriend",function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
   res.redirect("/friends");
});


app.get("/friends",function(req,res){
   res.render("friends.ejs",{friends:friends}); 
});


app.listen(process.env.PORT,process.env.IP, function(){
   console.log("Server is listening !"); 
});