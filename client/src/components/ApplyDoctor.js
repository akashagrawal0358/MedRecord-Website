import React from 'react';
import { TimePicker } from 'antd';
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
    const handleApply = async (e) => {
        e.preventDefault()
        console.log('success');
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Apply Doctor </h1>
            <div style={styles.registrationContainer}>

                <form onSubmit={handleApply} style={styles.registrationForm}>

                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" style={styles.input} required />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" style={styles.input} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" style={styles.input} required />

                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="number" id="phoneNumber" name="phoneNumber" style={styles.input} required />

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" style={styles.input} required />

                    <label htmlFor="specialization">Specialization:</label>
                    <input type="text" id="specialization" name="specialization" style={styles.input} required />

                    <label htmlFor="experience">Experience:</label>
                    <input type="number" id="experience" name="experience" style={styles.input} required />

                    <label htmlFor="feePerConsultant">Fee per Consultant:</label>
                    <input type="number" id="feePerConsultant" name="feePerConsultant" style={styles.input} required />

                    <label htmlFor="timings"> Time:</label>
                    <TimePicker.RangePicker />

                    <button type="submit" style={styles.button}>Apply</button>
                </form>
            </div>
        </>
    )
}

export default ApplyDoctor