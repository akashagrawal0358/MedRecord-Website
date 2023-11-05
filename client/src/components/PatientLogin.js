import React from 'react'

import '../styles/PatientLogin.css'


const PatientLogin = () => {

    return (
        <div className="login-container">
            <h2>Patient Login</h2>
            <form action="" method="post" >
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">E-Mail</label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <button type="submit">Registered</button>
                </div>
            </form>
        </div>
    )
}



export default PatientLogin