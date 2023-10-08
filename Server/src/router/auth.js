const express = require('express');
const router =  express.Router();

const Patient = require("../models/patients") ;

router.post('/register', async (req, res) => {
    const { name, email, mobile,dob , gender, address,address2,
        country, State, city, postalCode, password, cPassword } = req.body;

    if (!name || !email || !mobile || !dob || !gender || !address || !country ||
        !address2 || !State || !city  || !password || !cPassword) {
        return res.status(422).json({ error: "Plzz Filled the field Properly" })
    }
    try {
        const patientExist = await Patient.findOne({ email: email });
        if (patientExist) {
            return res.status(400).json({ error: "Email already Exist" });
        }
        else if (password != cPassword) {
            return res.status(403).json({ error: "Password not matching" });
        }
        else {
            const patient = new Patient({
                name, email, mobile, dob, gender, address,
                address2,country, State, city, postalCode, password, cPassword
            });
            await patient.save();
            res.status(200).json({ message: "User Registered Successfully" });
        }
    }catch(err){
        console.log(err);
    }         
});

module.exports = router;