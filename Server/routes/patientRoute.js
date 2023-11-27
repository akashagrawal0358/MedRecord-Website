const express = require('express');

const router = express.Router() ;
const Patient = require('../models/PatientModel.js');
const bcrypt = require('bcrypt');

router.post('/signup', async( req , res)=>{
    try{
       const patientExists = await Patient.findOne({ email : req.body.email });

       if(patientExists){
          return res.status(200).send({msg : "Patient already Exists", success:false}) ;
       }
       const password = req.body.password ;
       
       // use for encryption 
       const salt = await bcrypt.genSalt(10);
       // Encrypted Password
       const hashedPassword = await bcrypt.hash(password, salt) ;
       // updating password 
       req.body.password = hashedPassword ;

       const newPatient = new Patient(req.body);
       await newPatient.save() ;
       res.status(201).send({ msg: "Patient created Successfully" , success: true});
    }
    catch(error){
        res.status(500).send({ msg: "Error creating Patient" , success: false});
    }
})

router.post('/patient-login', async( req , res)=>{
    try{

    }
    catch(error){

    }
})




module.exports = router ;