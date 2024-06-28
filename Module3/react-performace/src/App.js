import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import SumPage from './pages/SumPage';
import ItemsPage from './pages/itemsPage';

function App() {

  const HomePage = lazy(()=> import("./pages/HomePage"));
  const AboutPage = lazy(()=> import("./pages/AboutPage"));
  const ContactPage  = lazy(()=> import("./pages/ContactPage"));


  return (
    
    <BrowserRouter>

    <Navbar />
    <Suspense fallback={<div> Loading....</div>} >
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/sum" element={ <SumPage/> } />
        <Route path="/items" element={ <ItemsPage/> } />
        <Route path="/about" element={<AboutPage/>   } />
        <Route path="/contact" element={  <ContactPage/> } />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;




