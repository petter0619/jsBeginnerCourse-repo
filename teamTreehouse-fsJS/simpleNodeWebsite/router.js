var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var queryString = require('querystring');

var commonHeaders = { 'Content-Type': 'text/html' }; 

// Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
    // if ( url == "/" && GET )
    if( request.url === '/' ) {
        if( request.method.toLowerCase() === 'get' ) {
            response.writeHead(200, commonHeaders); // CommonHeaders = what type of content to serve to the browser e.g: text/html, text/plain, application/json, text/css, text/javascript
            // show search
            renderer.view('header', {}, response);
            renderer.view('search', {}, response);
            renderer.view('footer', {}, response);
            response.end();

        // if (url == "/" && POST) redirect to /:username
        } else if( request.method.toLowerCase() === 'post' ) {
            // Get the POST data from body
            request.on('data', function(postBody) {     // Stream event
                // Extract the username
                var query = queryString.parse( postBody.toString() );
                // Redirect to user page
                response.writeHead(303, { 'Location': '/' + query.username });
                response.end();
            });
        }
    }
}

// Handle HTTP route GET /:username i.e. /chalkers
function userRoute(request, response) {
    // if ( url == "/...")
    var username = request.url.replace('/', '');
    if(username.length > 0) {
        response.writeHead(200, commonHeaders);
        renderer.view('header', {}, response);

        // GET json from Treehouse
        var studentProfile = new Profile(username);
        //on "end"          
        studentProfile.on("end", function(profileJSON) {
            // Store the values we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badgeCount: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            // show profile
            renderer.view('profile', values, response);
            renderer.view('footer', {}, response);
            response.end();
        });

        //on "error"
        studentProfile.on("error", function(error) {
            //show error
            renderer.view('error', { errorMessage: error.message }, response);
            renderer.view('search', {}, response);
            renderer.view('footer', {}, response);
            response.end();
        });
    }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
