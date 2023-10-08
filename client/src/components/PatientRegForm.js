import React, { useState } from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

  .container {
    position: relative;
    max-width: 700px;
    width: 100%;
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  .container header {
    font-size: 1.5rem;
    color: #333;
    font-weight: 600;
    text-align: center;
  }
  .container .form {
    margin-top: 30px;
  }
  .form .input-box {
    width: 100%;
    margin-top: 20px;
  }
  .input-box label {
    color: #333;
  }
  .form :where(.input-box input, .select-box) {
    position: relative;
    height: 50px;
    width: 100%;
    outline: none;
    font-size: 1rem;
    color: #707070;
    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 0 15px;
  }
  .input-box input:focus {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
  .form .column {
    display: flex;
    column-gap: 15px;
  }
  .form .gender-box {
    margin-top: 20px;
  }
  .gender-box h3 {
    color: #333;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .form :where(.gender-option, .gender) {
    display: flex;
    align-items: center;
    column-gap: 50px;
    flex-wrap: wrap;
  }
  .form .gender {
    column-gap: 5px;
  }
  .gender input {
    accent-color: rgb(130, 106, 251);
  }
  .form :where(.gender input, .gender label) {
    cursor: pointer;
  }
  .gender label {
    color: #707070;
  }
  .address :where(input, .select-box) {
    margin-top: 15px;
  }
  .select-box select {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    color: #707070;
    font-size: 1rem;
  }
  .form button {
    height: 55px;
    width: 100%;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgb(130, 106, 251);
  }
  .form button:hover {
    background: rgb(88, 56, 250);
  }
  /*Responsive*/
  @media screen and (max-width: 500px) {
    .form .column {
      flex-wrap: wrap;
    }
    .form :where(.gender-option, .gender) {
      row-gap: 15px;
    }
  }
  `

const PatientRegForm = () => {

  const [patient, setPatient] = useState({
    name: "", email: "", mobile: "", dob: "", gender: "", address: "",
    address2: "", country: "", State: "", city: "", postalCode: "", password: "", cPassword: ""
  });
  let name, value;
  const handleInputs = (event) => {
    console.log(event);
    name = event.target.name;
    value = event.target.value;

    setPatient({ ...patient, [name]: value })
  }

  const postData = async (event) => {
    event.preventDefault();
    const { name, email, mobile, dob, gender, address,
      address2, country, State, city, postalCode, password, cPassword } = patient;

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // Used to provide data in string format to the server 
      body: JSON.stringify({
        name, email, mobile, dob, gender, address, address2,
        country, State, city, postalCode, password, cPassword
      })
    });
    const data = await res.json();

    if (res.status === 200) {
      console.log(data);
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
    }
    else {
      console.log(data);
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
  }

  return (
    <Wrapper >
      <div className='container'>
        <header>Patient Registration Form</header>
        <form method="POST" className="form">
          <div className="input-box">
            <label htmlFor='name'>Full Name</label>
            <input type="text" name="name" id='name' value={patient.name}
              onChange={handleInputs} placeholder="Enter full name"
              autoComplete='off' />
          </div>
          <div className="input-box">
            <label htmlFor='email'>Email Address</label>
            <input type="text" name="email" value={patient.email}
              onChange={handleInputs} placeholder="Enter email address" />
          </div>
          <div className="column">
            <div className="input-box">
              <label htmlFor='mobile'>Mobile Number</label>
              <input type="number" name="mobile" value={patient.mobile}
                onChange={handleInputs} placeholder="Enter phone number" />
            </div>
            <div className="input-box">
              <label htmlFor='dob'>Birth Date</label>
              <input type="date" name="dob" onChange={handleInputs} value={patient.dob}
                placeholder="Enter birth date" />
            </div>
          </div>
          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender" >
                <input type="radio" name="gender" value="Male"
                  id="check-male" onChange={handleInputs} />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input type="radio" name="gender" value="Female"
                  id="check-female" onChange={handleInputs} />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input type="radio" name="gender" value="Prefer not to say"
                  id="check-other" onChange={handleInputs} />
                <label htmlFor="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <label htmlFor='address'>Address</label>
            <input type="text" name="address" value={patient.address}
              onChange={handleInputs} 
              placeholder="Enter street address" required />
            <input type="text" name="address2" value={patient.address2}
              onChange={handleInputs} placeholder="Enter street address line 2" />
            <div className="column">
              <div className="select-box">
                <select name='country' onChange={handleInputs} value={patient.country} >
                  <option hidden >Country</option>
                  <option value="America" >America</option>
                  <option value="Japan">Japan</option>
                  <option value="India">India</option>
                  <option value="Nepal">Nepal</option>
                </select>
              </div>
              <input type="text" name="State" value={patient.State}
                onChange={handleInputs} placeholder="Enter your State" required />
            </div>
            <div className="column">
              <input type="text" name="city" value={patient.city}
                onChange={handleInputs} placeholder="Enter your City" required />
              <input type="number" name="postalCode" value={patient.postalCode}
                onChange={handleInputs} placeholder="Enter postal code" required />
            </div>
            <div className="column">
              <div className="input-box">
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" value={patient.password}
                  onChange={handleInputs} placeholder="Enter your Password" required />
              </div>
              <div className="input-box">
                <label htmlFor='cPassword'>Confirm Password</label>
                <input type="password" name="cPassword" value={patient.cPassword}
                  onChange={handleInputs} placeholder="Confirm your Password" required />
              </div>
            </div>
          </div>
          <button onClick={postData} name='register' value="register" >Register</button>
        </form>
      </div>
    </Wrapper>
  )
}

export default PatientRegForm;