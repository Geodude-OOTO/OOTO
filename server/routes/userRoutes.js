const express = require('express'); 
const { 
    userRegister, 
    userLogin
} = require('../controllers/userController');  
const validInfo = require('../controllers/validInfo.js'); 
const authUser = require('../controllers/authController.js');

const router = express.Router(); 
router.post('/register', validInfo, userRegister);  
router.post('/login', validInfo, userLogin);
router.get('/is-verify', authUser, async (req, res) => {
try { 
    res.json({ message: 'You are authorized', user: req.user });
    //res.json(true); 
    console.log('user authorized')
} catch (error) {
    res.status(400).json({message: "Server Error"});
}
})
module.exports = router;