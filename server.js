// Dependencies
var express = require("express");
var path = require("path");

// Set up Express
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware to handle data parsing for Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router: points to the route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});