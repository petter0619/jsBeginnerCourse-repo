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
        response.write(username + '\n');
        response.end('Footer \n');

        // GET json from Treehouse
            //on "end"
                // show profile
            //on "error"
                //show error
    }
}

module.exports.home = homeRoute;
module.exports.user = userRoute;
