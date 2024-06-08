// const express = require('express'); 
// const router = express.Router(); 
// const pool = require('../config/database.js'); 
// const eventController = {
// }; 

// eventController.addEvent =  async (req, res) => {
//  const { title, start, end } = res.locals; 
//  const query = { text: ` INSERT INTO CalendarEntries (title, start, "end") VALUES ($1, $2, $3) RETURNING *`, values: [title, start, end], }; 
//  try {
//     const event = await pool.query(query); 
//     res.locals = event; 
// } catch (error) {
//     res.status(400).json('error adding event'); 
// }

// }  

// eventController.getEvents = async (req, res) => {
//     const query = { text: 'SELECT * FROM CalendarEntries', };  
//     try {
//         const event = await pool.query(query); 
//         res.locals = event; 
//     } catch (error) {
//         res.status(400).json('error getting events'); 
//     }

// }

// module.exports = eventController

const pool = require('../config/database.js');
const eventController = {};

eventController.addEvent = async (req, res, next) => {
    const { title, start, end } = req.body; // Assuming data comes from req.body

    // Input validation
    if (!title || !start || !end) {
        return res.status(400).json({ error: 'Title, start, and end are required' });
    }

    const query = {
        text: `INSERT INTO CalendarEntries (title, start, "end") VALUES ($1, $2, $3) RETURNING *`,
        values: [title, start, end],
    };

    try {
        const result = await pool.query(query);
        next(); // Call the next middleware
    } catch (error) {
        res.status(500).json({ error: 'Error adding event', details: error.message });
    }
};

eventController.getEvents = async (req, res, next) => {
    const query = { text: 'SELECT * FROM CalendarEntries' };

    try {
        const result = await pool.query(query);
        res.locals.rows = result.rows; // Set the result in res.locals

        if (res.locals.rows.length === 0) {
            return res.status(404).json({ error: 'No events found' });
        }

        next(); // Call the next middleware
    } catch (error) {
        res.status(500).json({ error: 'Error getting events', details: error.message });
    }
};

module.exports = eventController;
