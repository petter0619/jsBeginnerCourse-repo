/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// Get a random number between X and Y
exports.getRandomBetween = (min, max, randomNumber = Math.random()) => {
    return Math.floor(randomNumber * (max - min) + min);
}