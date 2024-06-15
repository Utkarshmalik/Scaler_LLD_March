import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import LandingPage from './pages/LandingPage/LandingPage';
import MovieDetailsPage from './pages/MovieDetails/MovieDetails';
import MovieTheatres from './pages/MovieTheatres/MovieTheatres';
import Bookings from './pages/Bookings/Bookings';
import InvalidPage from './pages/InvalidPage/InvalidPage';


function App() {

  return ( <div>
      <BrowserRouter>
      
      <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage/>} />
        <Route path="/buyTickets/:movieId" element={<MovieTheatres/>} />
        <Route path="/buyTickets/:movieId/:theatreId" element={<Bookings/>} />
        
        <Route path="*" element={<InvalidPage/>}/>


      </Routes>
      
      
      </BrowserRouter>
    </div>
   
  )
}

export default App
