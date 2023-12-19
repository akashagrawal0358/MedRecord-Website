import React, { useEffect} from 'react'
import '../styles/Patient-Profile.css'
import PatientProfileData from '../components/PatientProfileData';


const PatientProfile = () => {
  
 // const[clickedLink , setClickedLink] = useState('Patient Profile'); 
  
  
  useEffect(()=>{
    // fetched Profile Data every first time when component renders 
    fetchProfileData() ;
  }, []);
  


  const handleLinkClick = () => {
      console.log("clicked");
      
     
  }
  
  const fetchProfileData = ()=>{
  }
   

  return (
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
              Reports
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
             <PatientProfileData/>
        </div>
      </div>

    </div>
  )
}

export default PatientProfile