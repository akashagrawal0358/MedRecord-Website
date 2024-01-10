import React, { useState } from 'react'
import '../styles/Patient-Profile.css'
import PatientProfileData from '../components/PatientProfileData';
import Appointments from '../components/Appointments';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApplyDoctor from '../components/ApplyDoctor';
import AdminProfileData from '../components/AdminProfileData';


const PatientProfile = () => {
  const [activeLink, setactiveLink] = useState('Patient Profile');
  const { patient } = useSelector((state) => state.patient);
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setactiveLink(link);
  };

  // For Logout functionalities
  const handleLogout = () => {
    localStorage.clear();
    navigate('/patient-login');
  };

  // renders when we clicked on link in sidebar
  const renderComponent = () => {
    switch (activeLink) {
      case 'Appointments':
        return <Appointments />;

      case 'Apply-doctor':

        return <ApplyDoctor />
      // return navigate('/apply-doctor');

      case 'Patients':
        return <div>List of Patients</div>;

      case 'Admin-profile':
        return <AdminProfileData />;
      case 'Doctors':
        return <div>List of Doctors</div>;

      case 'Contact':
        return <div>Contact Component</div>;
      default:
        return null; // Return null for default case
    }
  };

  // Conditionally render content based on user role
  const renderProfileContent = () => {
    if (patient) {
      if (patient.isAdmin) {
        return (
          <>
            <div className='link' onClick={() => handleLinkClick('Admin-profile')}>
              Profile

            </div>
            <div className='link' onClick={() => handleLinkClick('Patients')}>
              Patients
            </div>
            <div className='link' onClick={() => handleLinkClick('Doctors')}>
              Doctors
            </div>
            <div className='link' onClick={() => handleLinkClick('Contact')}>
              Contact
            </div>
            <div className='link' onClick={() => handleLogout()}>
              Logout
            </div>
          </>
        );
      } else if (patient.isDoctor) {
        return (
          <>
            <div className='link' onClick={() => handleLinkClick()}>
              Doctor Profile
            </div>
            <div className='link' onClick={() => handleLinkClick('Contact')}>
              Contact
            </div>
            <div className='link' onClick={() => handleLogout()}>
              Logout
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className='link' onClick={() => handleLinkClick()}>
              Patient Profile
            </div>
            <div className='link' onClick={() => handleLinkClick('Appointments')}>
              Appointments
            </div>
            <div className='link' onClick={() => handleLinkClick('Apply-doctor')}>
              Apply Doctor
            </div>
            <div className='link' onClick={() => handleLinkClick('Contact')}>
              Contact
            </div>
            <div className='link' onClick={() => handleLogout('logout')}>
              Logout
            </div>
          </>
        );
      }
    }

    return null;
  };

  return (
    <>
      <div className='containerr-outer-profile'>
        <div className='containerr-profile'>
          <div className='first-col'>
            <div className='profile-img'>
              <figure>
                <img src='../Images/profile-user.png' alt='not found' />
                <figcaption className='profilenameFig'>{patient?.name}</figcaption>
              </figure>
            </div>

            <div className='first-col-links'>{renderProfileContent()}</div>
          </div>

          <div className='second-col'>{renderComponent()}</div>
        </div>
      </div>
    </>
  );
};

export default PatientProfile;
