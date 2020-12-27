const express = require('express');
const router =  express.Router();

// Middleware test; "router" should behave similar to app...
router.use( (req, res, next) => {
    res.locals.footerMessage = "This footer message was set in index.js.";
    next();
});

// Routes
router.get('/', (req, res) => {
    const name = req.cookies.username;
    if(!name) {
        res.redirect('/hello');
    } else {
        res.render('index', { name });
    }
});

router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if(name) {
        res.redirect('/');
    } else {
        res.render('hello', { name });
    }
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username') 
    res.redirect('/hello');
});

module.exports = router;