
// Get a random number between X and Y
exports.getRandomBetween = (min, max, randomNumber = Math.random()) => {
    return Math.floor(randomNumber * (max - min) + min);
}