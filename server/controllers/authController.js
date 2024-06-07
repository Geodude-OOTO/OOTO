const jwt = require('jsonwebtoken'); 
const dotenv = require('dotenv')
dotenv.config();
const authUser = async (req, res, next) => {
 try {
    const jwtToken = req.header('token'); 
    if(!jwtToken) {
    return res.status(400).json('Not authorized')
    } 
    const payload = jwt.verify(jwtToken, process.env.jwtSecret); 
    req.user = payload.user; 
    next();
 } catch (error) {
    console.error(err.message); 
    return res.status(400).send('Not authorized')
 }
} 

module.exports = authUser;