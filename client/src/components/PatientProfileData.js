import React from 'react'
import { useSelector } from 'react-redux';

const PatientProfileData = () => {

  const { patient } = useSelector((state) => state.patient);
  

  return (
    <>
      <h2 style={{textAlign: "center"}}> Patient Profile</h2>
      <div className='PatientProfile'>
        <div className='PatientProfileData'>
          <span >Name: </span>
        
        </div>
        <div className='PatientProfileData'>
          <span >Email:</span>
        
        </div>
      </div >
    </>
  )
}

export default PatientProfileData