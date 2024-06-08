const express = require('express'); 
const router = express.Router(); 
const pool = require('../config/database.js'); 
const eventController = {
}; 

eventController.addEvent =  async (req, res) => {
 const { title, start, end } = res.locals; 
 const query = { text: ` INSERT INTO CalendarEntries (title, start, "end") VALUES ($1, $2, $3) RETURNING *`, values: [title, start, end], }; 
 try {
    const event = await pool.query(query); 
    res.locals = event; 
} catch (error) {
    res.status(400).json('error adding event'); 
}

}  

eventController.getEvents = async (req, res) => {
    const query = { text: 'SELECT * FROM CalendarEntries', };  
    try {
        const event = await pool.query(query); 
        res.locals = event; 
    } catch (error) {
        res.status(400).json('error getting events'); 
    }

}

module.exports = eventController

