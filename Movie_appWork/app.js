var express = require("express");
var app = express();
var request = require("request");


app.get("/",function(req,res){
      res.render("search.ejs");   
});

app.get("/result",function(req,res){
   var url = "https://omdbapi.com/?s=india&apikey=thewdb";
   request(url, function(error,response,body){
      if(!error && response.statusCode == 200){
         var data = JSON.parse(body);
         res.render("result.ejs",{data: data}); 
      } 
   });
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Movie App has started !"); 
});