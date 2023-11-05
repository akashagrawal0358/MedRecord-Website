import React from 'react'

import '../styles/PatientLogin.css'


const PatientLogin = () => {

    return (
        <div className="login-container">
            <h2>Patient Login</h2>
            <form action="" method="post" >
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                </div>

                <div className="form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}



export default PatientLogin