var renderer = require("./renderer.js");
var queryString = require('querystring');

var commonHeaders = { 'Content-Type': 'text/html' }; 

// Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
    if( request.url === '/' ) {

        //console.log('------------- "/" request received -------------');

        if( request.method.toLowerCase() === 'get' ) {
            
            //console.log('------------- GET request received -------------');

            response.writeHead(200, commonHeaders);
            renderer.view('headBodyOpen', {title: 'Vanilla Node Starter Template'}, response);
            renderer.view('betweenBody', {h2: 'Hello World!'}, response);
            renderer.view('footerBodyClose', {copyright: 'Vanilla Node Starter Template'}, response);
            response.end();

        } else if( request.method.toLowerCase() === 'post' ) {
            
            //console.log('------------- POST request received -------------');

            request.on('data', function(postBody) {     // Stream event
                // Extract the POST body
                var query = queryString.parse( postBody.toString() );

                //console.log('---------------------------------------' );
                //console.log( query );
                //console.log('---------------------------------------' );
                
                response.writeHead(200, commonHeaders);
                renderer.view('headBodyOpen', {title: 'Vanilla Node Starter Template'}, response);
                renderer.view('betweenBody', {h2: `${ query.inputValue }`}, response);
                renderer.view('footerBodyClose', {copyright: 'Vanilla Node Starter Template'}, response);
                response.end();
            });
        }
    }
}

function ignoreFavicon(request, response) {
    /*
    Browsers will by default try to request /favicon.ico from the root of a hostname, in order to show an icon in the browser tab.
    If you want to avoid this request returning a 404, you can either:
        - Supply a favicon.ico file that is available at the root of your site.
        - Use a module such as serve-favicon to point requests to a specific file.
        - Catch the favicon.ico request and send a 204 No Content status: app.get('/favicon.ico', (req, res) => res.status(204));
    */
    if( request.url === '/favicon.ico' ) {
        response.statusCode = 204;
        response.end();
    }
}

function nextRoute(request, response) {
    if( request.url !== '/' && request.url !== '/favicon.ico' ) {
        response.writeHead(301, { 'Location': '/' });
        response.end();   
    }
}

module.exports.home = homeRoute;
module.exports.ignoreFavicon = ignoreFavicon;
module.exports.next = nextRoute;