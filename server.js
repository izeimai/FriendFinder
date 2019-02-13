// Dependencies
var express = require("express");
var path = require("path");

// Set up Express
var app = express();
var PORT = 5000;

// Middleware to handle data parsing for Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Data (users with their answer scores)
var users = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
]

// Routes

// Default route for the homepage




// Listener
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});