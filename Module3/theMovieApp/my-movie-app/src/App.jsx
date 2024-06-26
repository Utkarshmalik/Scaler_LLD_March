import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import WatchList from './pages/WatchList/WatchList'
import Context from './Concepts/ContextAPI/ContextAPI'
import WatchListContextWrapper from './context/WatchListContext'
import Counter from './pages/Counter/Counter'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import Todo from './pages/Todo/Todo'
import User from './pages/Users/User'
import Gallery from './Assignments/Lecture1'

function App() {

  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <WatchListContextWrapper>
            <Navbar/>
            <Routes>
              <Route path='/user' element={<User/>} />
              <Route path='/todo' element={<Todo/>} />
              <Route path='/counter' element={<Counter/>} />
              {/* <Route path='/' element={<Context/>} /> */}
              <Route path='/' element={<Gallery/>} />
              <Route path="/watchlist" element={<WatchList/>} />
            </Routes>
     </WatchListContextWrapper>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
