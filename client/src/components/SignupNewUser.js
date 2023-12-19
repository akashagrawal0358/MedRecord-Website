import React, { useState } from 'react'
import '../styles/PatientLogin.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsSlice';


const SignupNewUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate() ;
    const dispatch = useDispatch();
   
    const handleSignup = async (e) => {
         e.preventDefault() ;
        try {
            dispatch(showLoading());
            const response = await axios.post('http://localhost:8000/api/patient/signup', {
                name: name,
                email: email,
                password: password
            });
            dispatch(hideLoading())
            if (response.data.success) {
                toast.success(response.data.msg);
                toast("Redirecting to login Page..");
                navigate('/patient-login');
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
        <div className="login-containerr-signup">
            <h2>Patient Signup</h2>
            <form onSubmit={handleSignup} >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit"  > Signup </button>
                </div>
            </form>
            <NavLink to="/patient-login" className='new-user-link' >
                <span>
                    Click here to login ?
                </span>
            </NavLink>
        </div>
    )
}

export default SignupNewUser