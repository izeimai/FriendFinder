// Dependencies
var express = require("express");
var path = require("path");

// Set up Express
var app = express();
var PORT = process.env.PORT || 5000;

// Middleware to handle data parsing for Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// Default route for the homepage

// Listener
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});