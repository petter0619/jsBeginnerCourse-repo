var Profile = require("./profile.js");
var renderer = require("./renderer.js");

// Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
    // if ( url == "/" && GET )
    if( request.url === '/' ) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        // show search
        renderer.view('header', {}, response);
        renderer.view('search', {}, response);
        renderer.view('footer', {}, response);
        response.end();

    }
    // if (url == "/" && POST)
        // redirect to /:username
    
}

// Handle HTTP route GET /:username i.e. /chalkers
function userRoute(request, response) {
    // if ( url == "/...")
    var username = request.url.replace('/', '');
    if(username.length > 0) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
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
