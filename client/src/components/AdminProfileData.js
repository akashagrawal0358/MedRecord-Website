import React, { useState } from 'react'
import { Badge } from 'antd';
import { RiNotification2Line } from "react-icons/ri";
import { useSelector } from 'react-redux';
import Notifications from '../pages/Notifications';



const AdminProfileData = () => {

    const { patient } = useSelector((state) => state.patient);
    const [showNotifications, setShowNotifications] = useState(false);

    const handleBadgeClick = () => {
        // To toggle the values on clicking Notifications  
        //  React provides the previous state as the argument to the updater function
        // React automatically passes the current state value to this function.
        setShowNotifications((prevShowNotifications) => !prevShowNotifications);
    };

    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
                <h2 style={{ textAlign: "center" }}> Admin </h2>
                <Badge count={patient?.unseenNotification.length} onClick={handleBadgeClick} style={{ fontSize: '14px', backgroundColor: '#ff4d4f'  }}>
                    <RiNotification2Line style={{ fontSize: '25px', color: '#1890ff' , cursor:'pointer'}} />
                </Badge>
            </div>
            <div className='PatientProfile'>
                {showNotifications ? (
                    <Notifications />
                ) : (
                    <>
                        <div className='PatientProfileData'>
                            <span>Name: </span>
                        </div>
                        <div className='PatientProfileData'>
                            <span>Email:</span>
                        </div>
                    </>
                )}
            </div >

        </>
    )
}

export default AdminProfileData