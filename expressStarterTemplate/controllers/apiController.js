// Example data
const { readJSONFile, writeJSONtoFile } = require('../utils');

// Controllers
exports.getJSON = async (req, res) => {
    const json = await readJSONFile('./public/examples/exampleData.json');
    res.json( json );
}

exports.postJSON = async (req,res) => {
    const file = './public/examples/exampleData.json';
    const postBody = req.body;

    if( Object.keys(postBody).length ) {
        const exampleData = await readJSONFile( file );
        exampleData.array.push(postBody);
        await writeJSONtoFile( file, exampleData );
        res.status(201).json( exampleData );
    } else {
        res.status(400).json({ "error": "Must include at least one property" });
    }
}