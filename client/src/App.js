import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Contact from '../src/pages/Contact';
import Facility from '../src/pages/Facility';
import Radiology from '../src/pages/Radiology.js';
import Patient from '../src/pages/Patient';
import PatientLogin from './components/PatientLogin.js';



import { GlobalStyle } from './GlobalStyle';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignupNewUser from './components/SignupNewUser.js';
import PatientProfile from './pages/PatientProfile.js';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <Router>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/facility' element={<Facility />} />
          <Route path='/patient-login' element={<PatientLogin />} />
          <Route path='/radiology' element={<Radiology />} />
          <Route path='/patient' element={<Patient />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignupNewUser />} />
          <Route path='/patient-profile' element={<PatientProfile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}


export default App;
