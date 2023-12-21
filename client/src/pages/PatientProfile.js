import React, { useEffect, useState } from 'react'
import '../styles/Patient-Profile.css'
import PatientProfileData from '../components/PatientProfileData';
import Appointments from '../components/Appointments';


const PatientProfile = () => {

  const [activeLink, setactiveLink] = useState('Patient Profile');


  useEffect(() => {
    // fetched Profile Data every first time when component renders 
    fetchProfileData();
  }, []);

  const handleLinkClick = (link) => {
    setactiveLink(link);
  }

  const fetchProfileData = () => {

  }

  // renders when we clicked on link in sidebar 
  const renderComponent = () => {

    switch (activeLink) {
      case 'Patient Reports':
        return <Appointments />;
      case 'Status':
        return <div>Status Component</div>;
      case 'Contact':
        return <div>Contact Component</div>;
       default :
        return <PatientProfileData/> 
    }
  }

  return (

    <>

      <div className='containerr-outer-profile'>
        <div className='containerr-profile'>
          <div className='first-col'>
            <div className='profile-img'>
              <figure>
                <img src='../Images/profile-user.png' alt='not found' />
              </figure>

              Patient Name
            </div>

            <div className='first-col-links'>
              <div className='link' onClick={() => handleLinkClick()}>
                Patient Profile
              </div>
              <div className='link' onClick={() => handleLinkClick('Patient Reports')}>
                Appointments
              </div>
              <div className='link' onClick={() => handleLinkClick('Status')}>
                Status
              </div>
              <div className='link' onClick={() => handleLinkClick('Contact')}>
                Contact
              </div>
            </div>

          </div>

          <div className='second-col'>
            {renderComponent()}
          </div>
        </div>

      </div>
    </>
  )
}

export default PatientProfile