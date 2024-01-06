
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
    },
    isDoctor: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    seenNotification: {
        type: Array,
        default: []
    },
    unseenNotification: {
        type: Array,
        default: []
    }

}, {
    timestamps: true
})

const Patient = new mongoose.model("Patient", PatientSchema);

module.exports = Patient;