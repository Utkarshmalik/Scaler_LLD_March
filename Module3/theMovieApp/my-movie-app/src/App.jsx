import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import WatchList from './pages/WatchList/WatchList'

function App() {

  return (
    <div>
      <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path="/watchlist" element={<WatchList/>} />
            </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
