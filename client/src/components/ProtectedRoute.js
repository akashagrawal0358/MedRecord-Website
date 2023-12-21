import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setPatient } from '../redux/patientSlice';
import { hideLoading, showLoading } from '../redux/alertsSlice';


function ProtectedRoute(props) {

  // useSelector used to select and retrieve specific pieces of state from the Redux store
  const { patient } = useSelector((state) => state.patient);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getpatient = async () => {

    try {
      dispatch(showLoading());
      const response = await axios.post('http://localhost:8000/api/patient/get-patient-info-by-id',
        {
          token: localStorage.getItem('token')
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
      );
      dispatch(hideLoading());

      if (response.data.success) {
        dispatch(setPatient(response.data.data));
      }
      else {
        localStorage.clear();
        navigate('/patient-login');
      }
    }
    catch (error) {
      dispatch(hideLoading());
      localStorage.clear();
      navigate('/patient-login');
    }

  }

  useEffect(() => {
    if (!patient) {

      getpatient()
    }
    else {
    }
  }, [patient])



  // token is present then only can access route
  if (localStorage.getItem('token')) {
    return props.children;
  }
  else {
    //return navigate('/patient-login'); ----> not works here 
    return <Navigate to='/patient-login' />
  }
}

export default ProtectedRoute