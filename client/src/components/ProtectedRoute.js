
import { Navigate } from 'react-router-dom';



function ProtectedRoute(props) {

   // token is present then only can access route
   if(localStorage.getItem('token')){
     return props.children ;
   }
   else{
       //return navigate('/patient-login'); ----> not works here 
       return <Navigate to='/patient-login'/>
   }
}

export default ProtectedRoute