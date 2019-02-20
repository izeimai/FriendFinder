# FriendFinder
Compatibility-based dating application using Express and Node.js

What does this app do? 
A user can fill out a survey form of ten questions and find out who they are most compatible with based on the similarity of their scores. After completing the form, a modal is displayed with the best match's name and photo (image from a URL if it was submitted). The user's answers are also stored so that future users can match up with them.

How is this app useful? 
This app uses Express (Node.js framework) to handle requests and responses (JSON and html) of a list of user names (potential matches) and their scores. We were familiarized with the GET and POST routes that will direct to two different html pages (home and survey). The array of objects containing all possible matches are stored in a file called friends.js. The apiRoutes.js file contains both the GET and POSt routes for the url /api/friends to both display the contents of friends.js and add to it with POST, as well as calculating the compatibility score. 

Future directions: 
Some type of form validation should help with the cases where the survey isn't filled completely (missing image url). It would also be good to be able to delete yourself from the list of potential matches (which should come up in the next assignment). 