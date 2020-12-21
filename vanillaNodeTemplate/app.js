var http = require('http');
var router = require('./router');

// Create a web server
http.createServer(function(request, response) {
    
    router.home(request, response);
    router.next(request, response);
    
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/ (aka http://localhost:3000/)');
