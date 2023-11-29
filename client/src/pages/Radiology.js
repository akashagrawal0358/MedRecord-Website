import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Radiology = () => {

  const getData = async () => {
    try {
      // {} --> payload
      const response = await axios.post('http://localhost:8000/api/patient/get-patient-info-by-id', {}, {
        headers: {
          // We are sending token to backend from localstorage
          // Space after Bearer
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      console.log(response.data);
    }
    catch (error) {

    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div>Radiology</div>
  )
}

export default Radiology