/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// Returns JSON data from a JSON file
// PARAM: filePath == a string with file path relative to where this utils.js file is, not where the function is called
exports.readJSONFile = (filePath) => {
  const fs = require('fs');
  const path = require("path");
  return new Promise((resolve, reject) => {
        const _path = path.resolve(__dirname, filePath);
        fs.readFile(  _path, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                resolve(json);
            }
        });
  });
};

// Overwrites a files content with JSON
// PARAM: data == content that is converted to JSON (pref. an object)
// PARAM: filePATH == a string with file path relative to where this utils.js file is
exports.writeJSONtoFile = (filePath, data = {}) => { // rewrites the entire file
    const fs = require('fs');
    const path = require("path");
    return new Promise((resolve, reject) => {
        const newContent = JSON.stringify(data, null, 2);
        const _path = path.resolve(__dirname, filePath);
        fs.writeFile(_path, newContent, (err) => {
            if (err) {
            reject(err);
            } else {
            resolve();
            }
        });
    });
}

// Get a random number between X and Y
exports.getRandomBetween = (min, max, randomNumber = Math.random()) => {
    return Math.floor(randomNumber * (max - min) + min);
}