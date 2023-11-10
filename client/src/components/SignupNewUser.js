import React, { useState } from 'react'
import '../styles/PatientLogin.css'
import { NavLink } from 'react-router-dom';

const SignupNewUser = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [OTP, setOTP] = useState('');


    return (
        <div className="login-container-signup">
            <h2>Patient Signup</h2>
            <form action="" method="post" >
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit"> Send OTP </button>
                </div>
            </form>
            <NavLink to="/patient-login" className='new-user-link' >
                <span>
                    Go back ?
                </span>
            </NavLink>
        </div>
    )
}

export default SignupNewUser