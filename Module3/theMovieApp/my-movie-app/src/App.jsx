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
import AuthHoc from './hoc/AuthHoc'

function App() {

  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <WatchListContextWrapper>
            <Navbar/>
            <Routes>
              <Route path='/user' element={ 

                <AuthHoc>
              <User/>
              </AuthHoc>
              
              } />
              <Route path='/todo' element={

                <AuthHoc>
                 <Todo/>
                </AuthHoc>
              
              
              } />
              <Route path='/counter' element={<Counter/>} />
              <Route path='/' element={
              
              <Home/>
            
            } />
              <Route path="/watchlist" element={
              <AuthHoc>
              <WatchList/>
              </AuthHoc>

              } />
            </Routes>
     </WatchListContextWrapper>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
