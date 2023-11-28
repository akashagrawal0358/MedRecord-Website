const express = require('express');

const router = express.Router();
const Patient = require('../models/PatientModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');






router.post('/signup', async (req, res) => {
    try {
        const patientExists = await Patient.findOne({ email: req.body.email });

        if (patientExists) {
            return res.status(200).send({ msg: "Patient already Exists", success: false });
        }
        const password = req.body.password;

        // use for encryption 
        const salt = await bcrypt.genSalt(10);
        // Encrypted Password
        const hashedPassword = await bcrypt.hash(password, salt);
        // updating password 
        req.body.password = hashedPassword;

        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).send({ msg: "Patient created Successfully", success: true });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Error creating Patient", success: false });
    }
})


router.post('/patient-login', async (req, res) => {
    try {
        const patient = await Patient.findOne({ email: req.body.email })

        if (!patient) {
            return res.status(200).send({ msg: "Patient not Exists" , success : false});
        }
        // bcrypt.compare helps in comparing  patient typed password with registered password 
        const isPasswordMatch = await bcrypt.compare(req.body.password , patient.password ) 
       
       if(!isPasswordMatch){
          return res.status(200).send({msg : "Password not matched" , success: false});
       } 
       else{
        const token = jwt.sign({id : Patient._id} , process.env.JWT_SECRET , { expiresIn : "1d" })
        res.status(200).send({msg : "Login Successfull" , success: true , data: token });
       }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({msg : "Error in login" , success: false , error });
    }
})




module.exports = router;