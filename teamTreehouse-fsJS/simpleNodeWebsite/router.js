var Profile = require("./profile.js");


// Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
    // if ( url == "/" && GET )
    if( request.url === '/' ) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        // show search
        response.write('Header \n');
        response.write('Search \n');
        response.end('Footer \n');

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
        response.write('Header \n');

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
            response.write(values.username + ' has ' + values.badgeCount + ' badges' + '\n');
            response.end('Footer \n');
        });

        //on "error"
        studentProfile.on("error", function(error) {
            //show error
            response.write( error.message + '\n');
            response.end('Footer \n');
        });
    }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
