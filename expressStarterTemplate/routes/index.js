const express = require('express');
const router =  express.Router();

// Routes
router.get('/', (req, res) => {
    const name = req.cookies.name;

    res.render('index', { name, title:'Hello, world!' });
});

router.post('/hello', (req, res) => {
    res.cookie('name', req.body.name);
    res.redirect(303, '/');
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('name') 
    res.redirect('/');
});

// Export routes
module.exports = router;