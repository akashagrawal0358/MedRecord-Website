
const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const Patient = new mongoose.model("Patient", PatientSchema);

module.exports = Patient;