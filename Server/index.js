const express = require('express');

const cors = require('cors');

require('dotenv').config() ;
const dbconn = require('./db/conn.js');

const app = express() ;
const PORT = process.env.PORT || 8000 ;

app.use(cors) ;


dbconn();




app.listen( PORT , ()=>{
    console.log(`Server is running at : ${PORT}` );
})

