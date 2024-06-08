const express = require('express'); 
const router = express.Router();  
const eventController = require('../controllers/eventController.js');

router.post('/', eventController.addEvent, (req, res) => {
    res.status(200).json(res.locals);
}) 

router.get();

module.exports = router;