const express = require('express');
const router =  express.Router();
// Import route handlers
const apiController = require('../controllers/apiController');
// Import error handler
const { catchAsyncErrors } = require('../errorHandlers');

// Routes

// @desc Gets all data from exampleData.json
// @route = GET /json
router.get('/', catchAsyncErrors(apiController.jsonApi));

// Export routes
module.exports = router;