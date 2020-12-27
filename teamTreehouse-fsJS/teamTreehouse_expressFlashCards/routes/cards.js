const { query } = require('express');
const express = require('express');
const router =  express.Router();
const { getRandomBetween } = require('../utils');

// Data
const { data } =  require('../data/flashCardData.json'); // Note: No need to call JSON.parse() for data in JSON files
const { cards } = data; // same as const cards = data.cards (syntactic sugar)

// Middleware test; "router" should behave similar to app...
router.use( (req, res, next) => {
    res.locals.footerMessage = "This footer message was set in cards.js.";
    next();
});

// Routes
router.get('/', (req, res) => {
    res.redirect( 303, `/cards/${getRandomBetween(0, cards.length)}?side=question` ) 
});

router.get('/:id', (req, res) => { // ACTUAL path = /admin
    const {side} = req.query;
    const {id} = req.params;
    const text = cards[id][side];
    const hint = req.query.side !== 'answer' ? cards[id].hint : '';

    const name = req.cookies.username;
    const templateData = {text, hint, name}
    
    if(side) {
        res.render('card', templateData);
    } else {
        res.redirect(`/cards/${id}?side=question` )
    }
    
});

module.exports = router;