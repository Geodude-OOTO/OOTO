const express = require('express');  
const router = express.Router(); 
const pool = require('../config/database.js');  
const bcrypt = require('bcrypt'); 
const  jwtGenerator = require("../utils/jwtGenerator.js");
const validInfo = require('./validInfo.js');
const userRegister = async(req, res, next) => { 
    try { 
        console.log('Request Body:', req.body);
      // 1. destructure the req.body (name, email, password) 
      const { name, email, password } = req.body; 

      //console.log('hi', 'line 10')

      // 2. check if the user exists 
      const user = await pool.query("SELECT * FROM activeUsers WHERE user_email = $1", [
        email
      ])  

      if(user.rows.length > 0) {
        return res.status(400).json({error: 'user exists'})
      }
      //res.json(user.rows);
      // 3. Bcrypt the user password 
      const saltRound = 10; 
      const salt = await bcrypt.genSalt(saltRound); 

      const bcryptPassword = await bcrypt.hash(password, salt)

      // 4. enter the new user inside our database  
      const newUser = await pool.query("INSERT INTO activeUsers(user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *", [name, email, bcryptPassword]); 

      //res.json(newUser.rows[0]);

      // 5 . generate our jwt token 
      const token = jwtGenerator(newUser.rows[0].user_id); 
      res.json({ token })
    } catch (error) {
      console.error(error.message);  
      res.status(400).send('server error'); 
      next(error);

    }
} 


const userLogin = async (req, res, next) => {
 try {
 
    //1. destructure the req.body 
    const {email, password} = req.body;

    //2. check if the user doesn't exist (if not throw error) 
    const user = await pool.query("SELECT * FROM activeUsers WHERE user_email = $1", [
        email
    ]); 

    if(!user.rows[0]) {
        return res.status(400).json({message: 'Password or Email is incorrect'})
    }

    //3. check if incoming password is the same as the database password  
    const validPassword = await bcrypt.compare(password, user.rows[0].user_password); 
    console.log(validPassword)

    //4. give them the jwt token
    const token = jwtGenerator(user.rows[0].user_id); 
    res.json({ token });
 } catch(error) {

 }
}

module.exports = {
    userRegister, 
    userLogin,
}