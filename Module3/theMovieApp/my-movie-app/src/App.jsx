import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import WatchList from './pages/WatchList/WatchList'
import Context from './Concepts/ContextAPI/ContextAPI'
import WatchListContextWrapper from './context/WatchListContext'

function App() {

  return (
    <div>
      
      <BrowserRouter>
      <WatchListContextWrapper>
            <Navbar/>
            <Routes>
              {/* <Route path='/' element={<Context/>} /> */}
              <Route path='/' element={<Home/>} />
              <Route path="/watchlist" element={<WatchList/>} />
            </Routes>
     </WatchListContextWrapper>
      </BrowserRouter>

    </div>
  )
}

export default App
