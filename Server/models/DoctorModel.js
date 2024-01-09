const mongoose = require('mongoose');



const DoctorSchema = new mongoose.Schema({
    // userID
    patientId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    feePerConsultant: {
        type: Number,
        required: true,
    },
    timings: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        default: "pending",
    }
},
    {
        timestamps: true
    }
)


const doctorModel = new mongoose.model("Doctor", DoctorSchema);

module.exports = doctorModel;