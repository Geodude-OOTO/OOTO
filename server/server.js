const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');
const dashboardRoute = require('./routes/dashboardRoute');
const eventRoutes = require('./routes/eventsRoute');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Test the database connection
app.use('/build', express.static(path.join(__dirname, '../build'))); 

// routes 
app.use('/api/user', userRoutes);

//dashboard route 
app.use('/api/dashboard', dashboardRoute); 

app.use('/api/events', eventRoutes);

app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/public/index.html'));
});




app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
