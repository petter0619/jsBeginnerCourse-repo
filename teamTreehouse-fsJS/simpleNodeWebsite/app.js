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

// Improvement ideas:
    // Currently CSS is internal on the pages. Extract CSS into external files and make that work.
    // Project suggestion: Build a lorem ipsum generator