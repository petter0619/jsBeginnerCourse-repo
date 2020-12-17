
const https = require('https');
const process = require('process');
const http = require('http');

// Print error
function printError(error) {
    console.error(error.message);
}

// Function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
    console.log( message );
}

// Connect to the API URL ( https://teamtreehouse.com/username.json )

function getProfile(username) {
    try {
        const request = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
            if(res.statusCode === 200) {
                //console.dir(res.statusCode);
                let body = '';
                // Read the data
                res.on('data', data => {        // Stream event... 
                    body += data.toString();
                });
                res.on('end', () => {
                    //console.log(body);
                    try{
                        // Parse the data with the JSON native object
                        const profile = JSON.parse( body );
                        //console.dir( profile );

                        // Print the data to the console
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch (error) {
                        printError(error);
                    }
                });
            } else {
                const message = `There was an error getting the profile for ${username} (${ http.STATUS_CODES[res.statusCode] })`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        });
        request.on('error', error => printError(error));
    } catch (error) {
        printError(error);
    }
}

module.exports.getProfile = getProfile;