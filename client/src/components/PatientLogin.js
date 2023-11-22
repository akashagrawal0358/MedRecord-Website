import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import '../styles/PatientLogin.css'


const PatientLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email);
        console.log(password);

    }

    return (
        <div className="login-container">
            <h2>Patient Login</h2>
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
                    <button type="submit" onClick={handleLogin} >Login</button>
                </div>
            </form>
            <NavLink to="/signup" className='new-user-link' >
                <span>
                    new user ?
                </span>
            </NavLink>
        </div>
    )
}



export default PatientLogin