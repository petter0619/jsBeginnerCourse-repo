// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const https = require('https');
const process = require('process');


// Function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
    console.log( message );
}

// Connect to the API URL ( https://teamtreehouse.com/username.json )

function getProfile(username) {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
        //console.dir(res.statusCode);
        let body = '';
        // Read the data
        res.on('data', data => {        // Stream event... 
            body += data.toString();
        });
        res.on('end', () => {
            //console.log(body);
            // Parse the data with the JSON native object
            const profile = JSON.parse( body );
            //console.dir( profile );

            // Print the data to the console
            printMessage(username, profile.badges.length, profile.points.JavaScript);
        });

    });
}

const usernames = [
    'chalkers',
    'alenaholligan',
    'davemcfarland'
];
//console.log( process.argv );
const users = process.argv.slice(2);    // process global object (access the current version of node and arguments passed in to the command line)
/*
users.forEach(username => {
    getProfile(username);
});
*/
users.forEach(getProfile); //works becuase function only takes in one argument

