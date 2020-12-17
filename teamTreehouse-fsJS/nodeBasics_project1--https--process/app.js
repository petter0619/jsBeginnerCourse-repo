// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const profile = require('./profile');

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
users.forEach(profile.getProfile); //works because function only takes in one argument