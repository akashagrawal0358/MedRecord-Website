const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/PatientRegistration").then(()=>{
    console.log("Connected to the database");
}).catch((e)=>{
    console.log("Failed.... : ", e);
})