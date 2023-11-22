import React from 'react'
import '../styles/Patient-Profile.css'


const PatientProfile = () => {
  return (
    // <div className='container' >
    <div className='container-outer-profile'>
      <div className='container-profile'>
        <div className='first-col'>
          <div className='profile-img'>
            <figure>
              <img src='../Images/profile-user.png' alt='not found' />

            </figure>
            Patient Name
          </div>

          <div className='first-col-links'>
            <div className='link'>
              Patient Profile
            </div>
            <div className='link'>
              Patient Data
            </div>
            <div className='link'>
               Status
            </div>
            <div className='link'>
              Contact
            </div>
          </div>

        </div>

        <div className='second-col'>
          dfevvvvvvvvvv
        </div>
      </div>

    </div>
  )
}

export default PatientProfile