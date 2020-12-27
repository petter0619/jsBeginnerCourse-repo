const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

// 1.1) Set up our Express app
const app = express();

// 2) Set up static server for your static assets (CSS, images, client side JS, etc)
app.use('/static', express.static('public') );

// 3.1) Set up body parser middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3.2) Set up cookieParser middleware to populate req.cookies with any cookies that came along with the request
app.use(cookieParser());

// TEST: app.locals = Variable available throughout our application...
app.use( (req, res, next) => {
    app.locals.username = req.cookies.username || null;
    next();
});

// TEST: res.locals = variable available inside all your templates...
app.use( (req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});

// 4) Set up our Templating Engine
app.set('view engine', 'pug');

// 5) Routes
app.use(mainRoutes);
app.use('/cards', cardRoutes);


// 6. Error handling middleware
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.err = err;
    res.status(500);
    res.render('error');
})

// 1.2) Create server on PORT
app.listen(5000, () => {
    console.log('Application running on localhost:5000');
});