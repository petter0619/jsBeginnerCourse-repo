/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// Returns JSON data from a JSON file
// PARAM: filePath == a string with file path relative to where this utils.js file is, not where the function is called
exports.readJSONFile = (filePath) => {
  const fs = require('fs');
  const path = require("path");
  return new Promise((resolve, reject) => {
      fs.readFile( path.resolve(__dirname, filePath) , 'utf-8', (err, data) => {
          if(err) {
              reject(err);
          } else {
              const json = JSON.parse(data);
              resolve(json);
          }
      });
  });
};

// Get a random number between X and Y
exports.getRandomBetween = (min, max, randomNumber = Math.random()) => {
    return Math.floor(randomNumber * (max - min) + min);
}