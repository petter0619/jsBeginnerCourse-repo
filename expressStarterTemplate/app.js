const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cors = require('cors')
// Other
const errorHandlers = require('./errorHandlers');
const utils = require('./utils');
// Routes
const mainRoutes = require('./routes');
const apiRoutes = require('./routes/api');

// 1.1) Set up our Express app
const app = express();

// OPT - Set up CORS
app.use(cors());
/*
// Enable all CORS requests
    app.use(cors());

// Enable CORS for a single route example:
    app.get('/api/path', cors(), function (req, res, next) {
        res.json({msg: 'This is CORS-enabled for a Single Route'})
    });


// Enable CORS from single origin domain
    const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 //some legacy browsers (IE11, various SmartTVs) choke on 204
    }
    app.use(cors(corsOptions));

// See more config options: https://expressjs.com/en/resources/middleware/cors.html
*/


// 2) Set up static server for your static assets (CSS, images, client side JS, etc)
app.use('/static', express.static('public') );

// 3.1) Set up body parser middleware to parse request body
app.use(bodyParser.json());                             // Middleware for parsing JSON objects (aka where Content-Type: application/json header is present)
app.use(bodyParser.urlencoded({ extended: false }));    // Middleware for parsing bodies from URL (aka does the same as bodyParser.json() but for URL-encoded requests)
/*
// 3.1) ALTERNATIVELY you can use the built-in body parser middleware to parse your requests. Exactly the same functionality as body-parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
*/

// 3.2) Set up cookieParser middleware to populate req.cookies with any cookies that came along with the request
app.use(cookieParser());

// res.locals = variable available inside all your templates.
app.use( (req, res, next) => {
    res.locals.currentPath = req.path;
    res.locals.siteName = 'Express Starter Template';
    res.locals.utils = utils;
    next();
});

// 4) Set up our Templating Engine
app.set('view engine', 'pug');

// 5) Routes
app.use('/', mainRoutes);
app.use('/api', apiRoutes);


// 6) If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// 7) Otherwise this was a really bad error we didn't expect! Development Error Handler - Prints stack trace
app.use(errorHandlers.developmentErrors);

// 1.2) Create server on PORT
app.listen(3000, () => {
    console.log('Application running on localhost:3000');
});