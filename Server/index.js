const express = require('express');
const app = express() ;
const cors = require('cors');



require('dotenv').config() ;
const PORT = process.env.PORT || 8000 ;


const dbconn = require('./db/conn.js');
app.use(express.json());
app.use(cors) ;

const patientRoute = require('./routes/patientRoute');
app.use('/api/patient' , patientRoute )

dbconn();




app.listen( PORT , ()=>{
    console.log(`Server is running at : ${PORT}` );
})

