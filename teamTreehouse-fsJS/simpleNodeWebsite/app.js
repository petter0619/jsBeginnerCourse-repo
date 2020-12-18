// Problem: We need a simple way to look at a user's abdge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profiel look ups and serve our templates via HTTP

var http = require('http');
var router = require('./router');

// Create a web server
http.createServer(function(request, response) {
    
    router.home(request, response);
    router.user(request, response);
    
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/ (aka http://localhost:3000/)');


// Function that handles the reading of files and merge in values
    // read from file and get a string
        // merge values into string