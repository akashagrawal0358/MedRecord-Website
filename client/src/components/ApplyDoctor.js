import React, { useState } from 'react';
import { TimePicker } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, hideLoading } from '../redux/alertsSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
//  antd  ---> npm install antd --save

const styles = {
    registrationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
        backgroundColor: 'rgb(240, 240, 240)'
    },
    registrationForm: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '10px',
        maxWidth: '600px',
        width: '100%',
        padding: '29px',
        marginBottom: '30px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflowY: 'auto',  // Enable vertical scrolling
        maxHeight: '65vh',  // Set a maximum height for the form
    },
    input: {
        width: '100%',
        padding: '8px',
        marginBottom: '15px',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '4px',
        outline: 'none',
    },
    button: {
        gridColumn: 'span 2',  // Span two columns
        backgroundColor: '#4caf50',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    label: {
        fontSize: '18px ', // Increase the font size for labels
        marginBottom: '5px', // Add a bit of space below the labels
    }

};

function ApplyDoctor() {
    const dispatch = useDispatch();
    const { patient } = useSelector((state) => state.patient);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        specialization: '',
        experience: '',
        feePerConsultant: '',
        timings: [],
    })


    // handle all the input values changes 
    const handleChange = (e) => {

        // this gives(destructure) name and value of current input event 
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    // handle time changes --> Used specifically for the TimePicker.RangePicker component
    const handleTimingChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            timings: value
        }))
    }

    const handleApply = async (e) => {
        e.preventDefault()
        try {
            dispatch(showLoading());
            console.log(formData);
            const response = await axios.post('http://localhost:8000/api/patient/apply-doctor', {
                // Send formData --> that contains all the entries data
                ...formData,
                patientId: patient._id
            });
            dispatch(hideLoading());

            if (response.data.success) {
                toast.success(response.data.msg);
                //  navigate('/')
            }
            else {
                toast.error(response.data.msg)
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Apply Doctor </h1>
            <div style={styles.registrationContainer}>
                <form onSubmit={handleApply} style={styles.registrationForm}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" style={styles.input} value={formData.firstName} onChange={handleChange} required />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" style={styles.input} value={formData.lastName} onChange={handleChange} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" style={styles.input} value={formData.email} onChange={handleChange} required />

                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="number" id="phoneNumber" name="phoneNumber" style={styles.input} value={formData.phoneNumber} onChange={handleChange} required />

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" style={styles.input} value={formData.address} onChange={handleChange} required />

                    <label htmlFor="specialization">Specialization:</label>
                    <input type="text" id="specialization" name="specialization" style={styles.input} value={formData.specialization} onChange={handleChange} required />

                    <label htmlFor="experience">Experience:</label>
                    <input type="number" id="experience" name="experience" style={styles.input} value={formData.experience} onChange={handleChange} required />

                    <label htmlFor="feePerConsultant">Fee per Consultant:</label>
                    <input type="number" id="feePerConsultant" name="feePerConsultant" style={styles.input} value={formData.feePerConsultant} onChange={handleChange} required />

                    <label htmlFor="timings"> Time:</label>
                    <TimePicker.RangePicker style={styles.input} onChange={handleTimingChange} />

                    <button type="submit" style={styles.button}>Apply</button>
                </form>
            </div>
        </>
    )
}

export default ApplyDoctor