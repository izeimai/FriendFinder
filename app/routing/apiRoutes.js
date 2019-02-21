// Load data to use
var friendData = require("../data/friends.js");


// Routing
module.exports = function (app) {

    // A GET route with the url /api/friends used to display a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    }); // close GET route

    // A POST routes /api/friends used to handle incoming survey results and the compatibility logic
    app.post("/api/friends", function (req, res) {
        // push the incoming survey result to the friends list
        var newFriend = req.body;
        friendData.push(newFriend);

        // Compatibility logic
        // Compare the difference between current user's scores against those from other users, question by question. 
        // Add up the differences to calculate the totalDifference and closest match will be the user with the least amount of difference

        // Loop through each of the users in the friendData
        var scoreArray = [];
        for (var i = 0; i < friendData.length; i++) {
            var fd = friendData[i];
            if (newFriend.name != fd.name) { // only compare scores if the name is different
                var scoresum = 0;
                // Loop through each of the scores
                for (var j = 0; j < fd.scores.length; j++) {
                    //takes the absolute difference between the user and the new user score
                    var score = Math.abs(fd.scores[j] - parseInt(newFriend.scores[j]));
                    // adds those differences together
                    scoresum += score;
                }
                // push that particular pair's compatibility score to the score array
                scoreArray.push(scoresum);
            }
        }

        // Function to find the index of the smallest number in an array
        function indexOfSmallest(a) {
            return a.indexOf(Math.min.apply(Math, a));
        }

        var minIndex = indexOfSmallest(scoreArray);

        res.json(friendData[minIndex]);

    }); // close POST route

} // close module.exports