import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './hoc/ProtectedRoute';
import ForgetPassword from './pages/Forget/Forget';
import ResetPage from './pages/Reset';
import SingleMoviePage from './pages/SingleMovie';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Routes>

      <Route path='/' element={  <Home/> }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forget' element={<ForgetPassword/>}/>
      <Route path='/reset' element={<ResetPage/>}/>
      <Route path='/movie/:id' element={ <ProtectedRoute> <SingleMoviePage/> </ProtectedRoute> }/>

    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
