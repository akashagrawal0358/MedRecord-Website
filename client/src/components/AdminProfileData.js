import React from 'react'
import { Avatar, Badge } from 'antd';
import { RiNotification2Line } from "react-icons/ri";
import { useSelector } from 'react-redux';

const AdminProfileData = () => {

    const { patient } = useSelector((state) => state.patient);

    return (
        <>

            <div style={{display:'flex', justifyContent : 'center' , gap:'10px', marginTop:'15px' }}>
                <h2 style={{ textAlign: "center" }}> Admin </h2>
                <Badge count={ patient?.unseenNotification.length} style={{ fontSize: '14px', backgroundColor: '#ff4d4f' }}>
                    <RiNotification2Line style={{ fontSize: '25px', color: '#1890ff' }} />
                </Badge>
            </div>
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

export default AdminProfileData