import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Contact from '../src/pages/Contact';
import Facility from '../src/pages/Facility';
import Radiology from '../src/pages/Radiology.js';
import Patient from '../src/pages/Patient';



import { GlobalStyle } from './GlobalStyle';
import Nav from './components/Nav';
import Footer from './components/Footer';


const App = () => {
  return (
    <>

      <Router>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/facility' element={<Facility />} />
          <Route path='/radiology' element={<Radiology />} />
          <Route path='/patient' element={<Patient />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
       <Footer/>
      </Router>
    </>
  )
}


export default App;
