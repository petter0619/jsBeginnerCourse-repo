const express = require('express');
const router =  express.Router();
// Import route handlers
const jsonController = require('../controllers/jsonController');
// Import error handler
const { catchAsyncErrors } = require('../errorHandlers');

// Routes
router.get('/', catchAsyncErrors(jsonController.json));

// Export routes
module.exports = router;