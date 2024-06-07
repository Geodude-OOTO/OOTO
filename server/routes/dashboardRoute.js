const express = require('express'); 
const router = express.Router(); 
const authUser = require('../controllers/authController'); 
const pool = require('../config/database.js');  
router.get('/', authUser, async(req, res) => {
    try {
        const user = await pool.query("SELECT user_name FROM activeUsers WHERE user_id = $1", 
        [ req.user ])
       res.json(user.rows[0]);
    } catch (error) {
        console.error(err.message); 
        res.status(400).json("Server error");
    }
}) 

module.exports = router;