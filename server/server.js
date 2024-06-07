const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const {Pool} = require('pg'); 
const dotenv = require('dotenv'); 
dotenv.config();
const userRoutes = require('./routes/userRoutes'); 
const dashboardRoute = require('./routes/dashboardRoute');
const bodyParser = require('body-parser');

app.use(express.json());
// Test the database connection
app.use('/build', express.static(path.join(__dirname, '../build'))); 

// routes 
app.use('/api/user', userRoutes);

//dashboard route 
app.use('/api/dashboard', dashboardRoute);
app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/public/index.html'));
});




app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
