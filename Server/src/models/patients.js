const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    mobile: {
        type: Number,
        required: true,
        unique : true 
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type : String ,
      //  required : true
    },
    address:{
        type : String ,
        required: true
    },
    address2:{
        type : String
    },
    country:{
       type: String,
      // required : true 
    },
    State:{
        type : String,
        required: true,
    },
    city:{
        type : String,
        required: true,
    },
    postalCode:{
        type : String,
        
    },
    password: {
        type: String,
        required: true
    },
    cPassword: {
        type: String,
        required: true
    }
})
// Creating an model named Register 
// const Register = new mongoose.model("Register" , patientSchema);
const Patient = new mongoose.model("Patient" , patientSchema);

module.exports = Patient ;