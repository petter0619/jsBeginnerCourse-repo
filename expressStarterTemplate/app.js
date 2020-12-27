const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Other
const errorHandlers = require('./errorHandlers');
const utils = require('./utils');
// Routes
const mainRoutes = require('./routes');
const apiRoutes = require('./routes/api');

// 1.1) Set up our Express app
const app = express();

// 2) Set up static server for your static assets (CSS, images, client side JS, etc)
app.use('/static', express.static('public') );

// 3.1) Set up body parser middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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