import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/PatientLogin.css'
import axios from 'axios';
import toast from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsSlice';


const PatientLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch() ;


    // hook provided by the react-redux library, which is commonly used with React applications to interact with a Redux store.
    // const {loading} = useSelector((state) => state.alerts);
    // console.log(loading);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        
        
        try {

            dispatch(showLoading())

            const response = await axios.post('http://localhost:8000/api/patient/patient-login', {
                email: email,
                password: password
            })

            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.msg);
                toast("Redirecting to Profile Page");
                // store token that received from backend
                // inside  --> data : token
                localStorage.setItem('token', response.data.data);
                navigate('/patient-profile');
            }
            else {
                toast.error(response.data.msg);
            }
        }
        catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }
    }

    return (
        <div className="login-containerr">
            <h2>Patient Login</h2>
            <form onSubmit={handleLogin} >
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" >Login</button>
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