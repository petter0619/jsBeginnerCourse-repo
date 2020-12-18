// Problem: We need a simple way to look at a user's abdge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profiel look ups and serve our templates via HTTP

// 1. Create a web server

// 2. Handle HTTP route GET / and POST / i.e. Home
    // if ( url == "/" && GET )
        // show search
    // if (url == "/" && POST)
        // redirect to /:username

// 3. Handle HTTP route GET /:username i.e. /chalkers
    // if ( url == "/...")
        // GET json from Treehouse
            //on "end"
                // show profile
            //on "error"
                //show error

// 4. Function that handles the reading of files and merge in values
    // read from file and get a string
        // merge values into string