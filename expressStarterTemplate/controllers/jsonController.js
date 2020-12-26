// Example data
const fs = require('fs');
var path = require("path");

function readStaticJSONFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile( require('path').resolve(__dirname, filePath) , 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                resolve(json);
            }
        });
    });
};

// Controllers
exports.json = async (req, res) => {
    const json = await readStaticJSONFile('../public/exampleData.json');
    res.json( json );
}