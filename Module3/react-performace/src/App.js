import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function App() {

  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [ContactPage, setContactPage] = useState(null);

  useEffect(()=>{
    import("./pages/HomePage")
    .then((module) => setHomePage(()=> module.default))
  },[]);

  const loadAboutPage = ()=>{
    import("./pages/AboutPage")
    .then((module) => setAboutPage(()=> module.default))
  }

    const loadContactPage = ()=>{
    import("./pages/ContactPage")
    .then((module) => setContactPage(()=> module.default))
  }

  return (
    
    <BrowserRouter>

    <Navbar loadAboutPage={loadAboutPage} loadContactPage={loadContactPage} />

      <Routes>

        <Route path="/" element={  HomePage ? <HomePage/>  : <div> Loading....</div> } />
        <Route path="/about" element={ AboutPage ? <AboutPage/> : <div> Loading....</div>  } />
        <Route path="/contact" element={ ContactPage ? <ContactPage/> : <div> Loading....</div> } />

        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
