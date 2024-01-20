import React from 'react'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { hideLoading, showLoading } from '../redux/alertsSlice';
import { setPatient } from '../redux/patientSlice';

function Notifications() {
    const { patient } = useSelector((state) => state.patient);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const markAllAsSeen = async () => {
        try {
            dispatch(showLoading);
            const response = await axios.post('http://localhost:8000/api/patient/mark-all-as-seen', { patientId: patient._id });
            dispatch(hideLoading())
            if (response.data.success) {
                toast.success(response.data.msg);
                dispatch(setPatient(response.data.data));
            }
            else {
                toast.error(response.data.msg);
            }
        }
        catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }

    }

    const deleteAll = async ()=>{
        try {
            dispatch(showLoading);
            const response = await axios.post('http://localhost:8000/api/patient/delete-all-notifications', {patientId : patient._id});
            dispatch(hideLoading())
            if (response.data.success) {
                toast.success(response.data.msg);
                dispatch(setPatient(response.data.data));
            }
            else { 
                toast.error(response.data.msg);
            }
        }
        catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }

    }


    return (
        <div >
            <Tabs defaultActiveKey="1" size="large" >
                <Tabs.TabPane tab="Unseen" key="1">
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <h6 onClick={() => markAllAsSeen()} style={{ cursor: "pointer" }} ><u>Mark all as seen</u></h6>
                    </div>
                    {
                        patient?.unseenNotification.map((notification) => (
                            <div className="card " onClick={() => navigate(notification.onclickPath)}>
                                <div className="card-body fs-6" style={{ cursor: "pointer" }}>
                                    {notification.message}
                                </div>
                            </div>
                        ))
                    }



                </Tabs.TabPane>

                <Tabs.TabPane tab="Seen" key="2">
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <h6 style={{ cursor: "pointer" }} onClick={()=> deleteAll()} ><u>Delete all</u></h6>
                    </div>
                    {
                        patient?.seenNotification.map((notification) => (
                            <div className="card " onClick={() => navigate(notification.onclickPath)}>
                                <div className="card-body fs-6" style={{ cursor: "pointer" }}>
                                    {notification.message}
                                </div>
                            </div>
                        ))
                    }
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default Notifications