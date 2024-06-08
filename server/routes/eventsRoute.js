const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController.js');

// Route for adding an event
router.post('/', eventController.addEvent, (req, res) => {
    res.status(201).json(res.locals.rows[0]); // Respond with the created event
});

// Route for getting events
router.get('/', eventController.getEvents, (req, res) => {
    res.status(200).json(res.locals.rows); // Respond with the fetched events
});

module.exports = router;
