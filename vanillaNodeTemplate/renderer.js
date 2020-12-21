var fs = require('fs');

function mergeValues(dynamicValues, content) {
    // Cycle over the keys
    for(var key in dynamicValues) {
        // Replace all {{key}} with the value from the values object
        content = content.replace(`{{${key}}}`, dynamicValues[key]);
    }
    // Return merged content
    return content;
};

function view(templateName, dynamicValues = {}, response) {
    // Read from the template file
    var fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: 'utf8'});
    // Insert values in to the content
    fileContents = mergeValues(dynamicValues, fileContents);
    // Write out the contents to the response
    response.write(fileContents);
}

module.exports.view = view;