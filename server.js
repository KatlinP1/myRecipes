require('dotenv').config(); //should be first in the row 
const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const request = require('request');
const app = express();

const apiKey = "d1675c0913384a79b733cf41ce7c02f8";
const apiURL = "https://api.spoonacular.com/recipes/";

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) =>{
    let reqURL = apiURL + "random/?apiKey="+apiKey;
    request(reqURL, { json: true }, (err, data, body) => {
        if (err || typeof body.recipes===undefined) { return console.log(err); res.render('error'); return; }
        console.log(body.url);
        console.log(body.explanation);
        console.log(body)

        res.render("index", {recipes : body.recipes});

    });
 
    

});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started.");
});

/*
app.listen(3000, ()=> {
    console.log('Server is running on port 3000'); 
}) */