const express = require('express');
const router =  express.Router();
// Import route handlers
const jsonController = require('../controllers/jsonController');
// Import error handler
const { catchAsyncErrors } = require('../errorHandlers');

// Routes

// @desc Gets all data from exampleData.json
// @route = GET /json
router.get('/', catchAsyncErrors(jsonController.jsonApi));

// Export routes
module.exports = router;