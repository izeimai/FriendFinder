// Load data to use
var friendData= require("../data/friends");


// Routing
module.exports = function(app) {

// A GET route with the url /api/friends used to display a JSON of all possible friends
app.get("/api/friends", function(req, res){
    res.json(friendData);
});

// A POST routes /api/friends used to handle incoming survey results and the compatibility logic
app.post("/api/friends", function(req, res) {
    // push the incoming survey result to the friends list
    var newFriend = req.body;
    friendData.push(req.body);

    for (var i = 0; i < friendData.length; i++) {
        console.log(newFriend.count);
        console.log(friendData[i].count);
    }
});


// Compatibility logic
// Convert each user's results into a simple array of numbers
// Compare the difference between current user's scores against those from other users, question by question. 
// Add up the differences to calculate the totalDifference
// closest match will be the user with the least amount of difference

} // close module.exports