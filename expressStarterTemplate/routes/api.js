const express = require('express');
const router =  express.Router();
// Import route handlers
const apiController = require('../controllers/apiController');
// Import error handler
const { catchAsyncErrors } = require('../errorHandlers');

// Routes

// @desc Gets all data from exampleData.json
// @route = GET /api
router.get('/', catchAsyncErrors(apiController.getJSON));


// @desc Creates a new item in the "array" array in exampleData.json
// @route = POST /api
router.post('/', catchAsyncErrors(apiController.postJSON));

// Export routes
module.exports = router;