const express = require('express');
const router =  express.Router();
// Import route handlers
const apiController = require('../controllers/apiController');
// Import error handler
const { catchAsyncErrors } = require('../errorHandlers');


// [OPTIONAL] Route specific res.locals
router.use( (req, res, next) => {
    res.locals.apiVariable = 'This variable is only available in /api/... rendered templates';
    next();
});

// ---------------- Routes ----------------

// @desc Gets all data from exampleData.json
// @route = GET /api
router.get('/', catchAsyncErrors(apiController.getJSON));


// @desc Creates a new item in the "array" array in exampleData.json
// @route = POST /api
router.post('/', catchAsyncErrors(apiController.postJSON));


// Export routes
module.exports = router;