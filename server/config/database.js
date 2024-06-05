const dotenv = require('dotenv'); 
const parse = require('pg-connection-string').parse;
dotenv.config(); 
const config = parse(process.env.DATABASE_URL);
const {Pool} = require('pg');  

const pool = new Pool(config);  
pool 
.connect() 
.then(() => {
    console.log('We Have connected DB successfully')
}) 
.catch((err) => console.log(err));
module.exports = pool;