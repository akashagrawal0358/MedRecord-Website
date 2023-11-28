const express = require('express');
const app = express() ;
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('dotenv').config() ;

const PORT = process.env.PORT || 8000 ;


const dbconn = require('./db/conn.js');
app.use(express.json());
app.use(cors()) ;
dbconn();



//  route present in patientRoute is mounted like -->  '/api/patient/signup'
const patientRoute = require('./routes/patientRoute');
app.use('/api/patient' , patientRoute )




// app.get('/', (req, res) => {
//     res.send("server")
// })

//app.use('/' , router) ;



app.listen( PORT , ()=>{
    console.log(`Server is running at : ${PORT}` );
})

