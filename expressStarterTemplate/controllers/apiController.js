// Example data
const fs = require('fs');
const path = require("path");

function readJSONFile(filePath) {
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
//const { readJSONFile } = require('../utils');

// Controllers
exports.jsonApi = async (req, res) => {
    const json = await readJSONFile('../public/examples/exampleData.json');
    res.json( json );
}