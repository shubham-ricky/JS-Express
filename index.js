/* Express dependency */
// the path is relative to the node_modules folder by default
const express = require('express');
const ejs = require('ejs');
const app = express();

app.set("view engine", "ejs");

// ROUTES (a url fragment) => a JavaScript function

app.get("/", function(req,res){
    // req: request (what the client is sending over)
    // res: response (what you are going to send back to the client)
    res.render("index",{
        "yourName":"Jon Snow",
        "luckyNumber": Math.random()*100
    }); // send the text "hello world" back to the client
});

app.get("/about-us", function(req,res){
    res.send("About Us");
})

app.get('/hello/:firstName', function(req,res){
    res.send("Hello " + req.params.firstName);
})

// start server
app.listen(8080, function(){
    console.log("Express server has started");
})