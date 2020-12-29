const express = require('express');
const router =  express.Router();

// Routes

// @desc Home page
// @route = GET /
router.get('/', (req, res) => {
    const name = req.cookies.name;
    res.render('index', { name, title:'Hello, world!' });
});

// @desc Takes in name from user, stores it in cookie "name", then redirects to home
// @route = POST /hello
router.post('/hello', (req, res) => {
    res.cookie('name', req.body.name);
    res.redirect(303, '/');
});

// @desc Clears "name" cookie, then redirects to home
// @route = POST /goodbye
router.post('/goodbye', (req, res) => {
    res.clearCookie('name') 
    res.redirect('/');
});

// Export routes
module.exports = router;