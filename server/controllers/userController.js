const express = require('express');  
const router = express.Router(); 
const pool = require('../config/database.js');  
const bcrypt = require('bcrypt');
const userRegister = async(req, res, next) => { 
    try { 
        console.log('Request Body:', req.body);
      // 1. destructure the req.body (name, email, password) 
      const { name, email, password } = req.body; 

      //console.log('hi', 'line 10')

      // 2. check if the user exists 
      const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        email
      ]) 
      res.json(user.rows);
      // 3. Bcrypt the user password 
      const saltRound = 10; 
      const salt = await bcrypt.genSalt(saltRound); 

      const bcryptPassword = bcrypt.hash(password, salt)

      // 4. enter the new user inside our database  
      //const newUser = await pool.query("INSERT INTO USERS(username, email, password) VALUES($1, $2, $3)", [name, email, password])

      // 5 . generate our jwt token 
    } catch (error) {
      console.error(error.message);  
      res.status(400).send('server error');

    }
} 

module.exports = {
    userRegister, 
}