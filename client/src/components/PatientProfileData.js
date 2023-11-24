import React from 'react'

const PatientProfileData = () => {
  return (
    <>
      <h2 style={{textAlign: "center"}}> Patient Profile</h2>
      <div className='PatientProfile'>
        <div className='PatientProfileData'>
          <span >Name:</span>
        </div>
        <div className='PatientProfileData'>
          <span >Email:</span>
        </div>
        <div className='PatientProfileData'>
          <span >Address:</span>
        </div>
        <div className='PatientProfileData'>
          <span >Country:</span>
        </div>
        <div className='PatientProfileData'>
          <span>Mobile Number:</span>
        </div>
        <div className='PatientProfileData'>
          <span >Birth Date:</span>
        </div>
        <div className='PatientProfileData'>
          <span>Gender:</span>
        </div>

      </div >
    </>
  )
}

export default PatientProfileData